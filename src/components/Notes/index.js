// Write your code here

import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesContainer,
  Heading,
  Form,
  TitleInput,
  NoteTextArea,
  AddButton,
  EmptyNotesViewContainer,
  EmptyNotesHeading,
  Image,
  Description,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [noteList, setNoteList] = useState('')

  console.log(noteList)

  const onAddNote = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }

    setNoteList(prevNoteList => [...prevNoteList, newNote])
    setTitle('')
    setNoteText('')
  }

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNoteText = event => {
    setNoteText(event.target.value)
  }

  const renderNotes = () => (
    <NotesList>
      {noteList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )

  const renderEmptyNotesView = () => (
    <EmptyNotesViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <Description>Notes you add will appear here</Description>
    </EmptyNotesViewContainer>
  )

  return (
    <MainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onAddNote}>
          <TitleInput
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />
          <NoteTextArea
            placeholder="Take a Note..."
            rows="4"
            onChange={onChangeNoteText}
            value={noteText}
          />
          <AddButton type="submit">Add</AddButton>
        </Form>
        {noteList.length === 0 ? renderEmptyNotesView() : renderNotes()}
      </NotesContainer>
    </MainContainer>
  )
}

export default Notes
