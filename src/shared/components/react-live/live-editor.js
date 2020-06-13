import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import okaidia from './okaidia'

export default function LiveEditorComponent ({ code, onChange, ...rest }) {
  return (
    <LiveProvider>
      <LiveEditor
        theme={ okaidia }
        padding={ 15 }
        { ...rest }
        code={ code }
        noInline
      />
      <LivePreview/>
      <LiveError/>
    </LiveProvider>
  )
}