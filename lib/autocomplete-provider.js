'use babel';

const getSuggestions = ({editor, bufferPosition, scopeDescriptor, prefix, activatedManually}) => {
  const column = bufferPosition.column - 1
  if (column >= 0) {
    const scopes = editor.scopeDescriptorForBufferPosition([bufferPosition.row, column]).getScopesArray()
    if (scopes.pop() === 'punctuation.definition.tag.end.tsx') {
      const rowBefore = editor.lineTextForBufferRow(bufferPosition.row).substring(0, bufferPosition.column)
      if (rowBefore.match(/<[^\/]+>$/)) {
        const tag = /<(\w+).*>$/.exec(rowBefore)[1]
        if (tag) {
          return [{
            snippet: `$1</${tag}>`,
            type: 'tag',
            description: 'tags autocomplete tag closer'
          }]
        }
      }
    }
  }
  return null
}

const provider = {
  selector: '.meta.tag.tsx',
  inclusionPriority: 10,
  excludeLowerPriority: false,
  suggestionPriority: 10,
  getSuggestions
}

export default provider
