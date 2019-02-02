import React, { useContext, ReactNode, useState, useMemo, SyntheticEvent } from 'react';
import { Indicator, positionToGridArea } from './Fretboard';
import { SettingsContext } from './settings-context';
import { Voicings, createVoicings } from './voicing';
import Listbox from './Listbox';
import './Explorer.scss';
import { RouteChildrenProps } from 'react-router';
import { useDepState } from './util';
import {
  majorTriad,
  minorTriad,
  addSemitones,
  diminishedTriad,
  majorSeventh,
  augmentedTriad,
  majorSixth,
  minorSixth,
  minorSeventh,
  seventh,
  augmentedSeventh,
  diminishedSeventh,
  halfDiminishedSeventh,
  minorMajorSeventh,
  Note,
  Chord
} from './music';

interface Params { 
  chordRoot: string;
  chordType: string;
}

interface Props extends RouteChildrenProps<Params> {
  content: (notes: Indicator[]) => ReactNode;
}

class ChordRoot {
  private label: string;

  constructor(public value: any, label?: string) {
    this.label = label || this.value.toString();
  }

  toString() {
    return this.label;
  }
}

const ChordRoots = [
  new ChordRoot('A'),
  new ChordRoot('A#', 'A# / Db'),
  new ChordRoot('B'),
  new ChordRoot('C'),
  new ChordRoot('C#', 'C# / Db'),
  new ChordRoot('D'),
  new ChordRoot('D#', 'D# / Eb'),
  new ChordRoot('E'),
  new ChordRoot('F'),
  new ChordRoot('F#', 'F# / Gb'),
  new ChordRoot('G'),
  new ChordRoot('G#', 'G# / Ab')
];

const ChordParts = ['Root', '3rd', '5th', '7th'];

type ChordNoteStatus = 'Optional' | 'Required' | 'Omitted' | 'Bass';

interface ChordNote {
  note: Note;
  label: string;
  status: ChordNoteStatus;
}

const chordTypes: { [key: string]: (note: Note | string) => Chord } = {
  'Major triad': majorTriad,
  'Minor triad': minorTriad,
  'Augmented triad': augmentedTriad,
  'Diminished triad': diminishedTriad,
  'Major 6th': majorSixth,
  'Minor 6th': minorSixth,
  '7th': seventh,
  'Major 7th': majorSeventh,
  'Minor 7th': minorSeventh,
  'Augmented 7th': augmentedSeventh,
  'Diminished 7th': diminishedSeventh,
  'Half-diminished 7th': halfDiminishedSeventh,
  'Minor-major 7th': minorMajorSeventh
}

const chordTypeKeys = Object.keys(chordTypes);

export default ({ content, match, history }: Props) => {
  const { tuning, fretCount } = useContext(SettingsContext);

  let { chordRoot: crParam, chordType } = match ? match.params : { chordRoot: 'A', chordType: 'Major triad' };

  crParam = decodeURIComponent(crParam);

  const chordRoot = ChordRoots.find(cr => cr.value == crParam) || ChordRoots[0];

  const voicings = useMemo(() => new Voicings(fretCount), [fretCount]);
  let [voicingIndex, setVoicingIndex] = useState(0);
 
  const chord = useMemo(() => {
    return chordTypes[chordType](chordRoot.value + '3');
  }, [chordRoot, chordType]);

  let [chordNotes, setChordNotes] = useState<ChordNote[]>([]);

  useMemo(() => {
    const isSeventh = chord.notes.length > 3;

    setChordNotes(chordNotes = chord.notes.map<ChordNote>((note, i) => ({
      note,
      label: note.toString() +' (' + ChordParts[i] + ')',
      status: i === 0 ? 'Bass' : (i === 2 && isSeventh) ? 'Optional' : 'Required'
    })));
  }, [chord]);

  const bassOptions = useMemo(() => {
    return [...chord.notes.map(note => note.toString()), 'Any'];
  }, [chord]);

  const [bassNote, setBassNote] = useDepState(currentBass => {
    if (bassOptions.includes(currentBass)) {
      return currentBass;
    }
    else {
      return bassOptions[0];
    }
  }, [bassOptions]);

  const chordVoicings = useMemo(() => {
    setVoicingIndex(voicingIndex = 0);
    // let result = voicings.getVoicings(tuning, chord);
    let result = createVoicings(
      tuning,
      chordNotes.filter(n => n.status === 'Bass' || n.status === 'Required').map(n => n.note),
      chordNotes.filter(n => n.status === 'Optional').map(n => n.note),
      fretCount
    );

    const bassNote = chordNotes.find(n => n.status === 'Bass');

    if (bassNote) {
      result = result.filter(v => v.bassNote.tone === bassNote.note.tone);
    }

    return result;
  }, [tuning, chordNotes]);

  const voicing = chordVoicings[voicingIndex];

  const showVoicing = (index: number) => {
    if (index < 0) {
      index = 0;
    }
    else if (index >= chordVoicings.length) {
      index = chordVoicings.length - 1;
    }

    setVoicingIndex(index);
  }

  const notes = useMemo(() => {
    const played: Indicator[] = [];

    voicing.notes.forEach((fret, string) => {
      if (fret !== null) {
        let note = addSemitones(tuning.notes[string], fret);

        played.push({
          type: note.tone === chord.rootNote.tone ? 'chordRoot' : 'indicator',
          note,
          gridArea: positionToGridArea(string, fret)
        });
      }
    });

    return played;
  }, [voicing]);

  function updateChordNote(index: number, status: ChordNoteStatus) {
    setChordNotes(chordNotes.map((n, i) => {
      if (index === i) {
        return {
          ...n,
          status
        };
      }
      else if (status === 'Bass' && n.status === 'Bass') {
        return {
          ...n,
          status: 'Required' as ChordNoteStatus
        }
      }

      return n;
    }));
  }

  return (
    <>
      { content(notes) }

      <div className="Explorer">
        <label className="Explorer-root Explorer-label">Root</label>
        <Listbox
          className="Explorer-chord Explorer-list"
          options={ChordRoots}
          value={chordRoot}
          onSelect={selected => history.push(`/explore/${ encodeURIComponent(selected.value) }/${ chordType }`)}
        />

        <label className="Explorer-chord-type Explorer-label">Chord</label>
        <Listbox
          className="Explorer-chord-type Explorer-list"
          options={chordTypeKeys}
          value={chordType}
          onSelect={selected => history.push(`/explore/${ encodeURIComponent(chordRoot.value) }/${ selected }`)}
        />

        <label className="Explorer-chord-notes Explorer-label">
          Notes
        </label>
        <div className="Explorer-chord-notes Explorer-list">
          { chordNotes.map((n, i) => {
            const update = (e: SyntheticEvent<HTMLInputElement>) => 
              updateChordNote(i, e.currentTarget.value as ChordNoteStatus);

            return (
              <React.Fragment key={i}>
                <span className="Explorer-chord-note-label">{ n.label }:</span>
                <label>
                  <input
                    type="radio"
                    value="Bass"
                    checked={n.status === 'Bass'}
                    onChange={update}
                  /> Bass
                </label>

                <label>
                  <input
                    type="radio"
                    value="Required"
                    checked={n.status === 'Required'}
                    onChange={update}
                  /> Required
                </label>

                <label>
                  <input
                    type="radio"
                    value="Optional"
                    checked={n.status === 'Optional'}
                    onChange={update}
                  /> Optional
                </label>

                <label>
                  <input
                    type="radio"
                    value="Omitted"
                    checked={n.status === 'Omitted'}
                    onChange={update}
                  /> Omitted
                </label>
              </React.Fragment>
            )
          })}
        </div>

        <label className="Explorer-voicings Explorer-label">{ chordVoicings.length} Voicings</label>
        <Listbox
          className="Explorer-voicings Explorer-list"
          options={chordVoicings}
          value={voicing}
          onSelect={value => setVoicingIndex(chordVoicings.indexOf(value))}
        />

        <div className="Explorer-voicings-nav">
          <button onClick={() => setVoicingIndex(0)}>|&lt;</button>
          <button onClick={() => showVoicing(voicingIndex - 1)}>&lt;</button>
          <button onClick={() => showVoicing(voicingIndex + 1)}>&gt;</button>
          <button onClick={() => showVoicing(chordVoicings.length - 1)}>&gt;|</button>
        </div>
      </div>
    </>
  );
};
