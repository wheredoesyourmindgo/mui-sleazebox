import React, {useCallback} from 'react'
import {ChildBox, RowBox} from '../lib/pkg/index'

const IndexPage = () => {
  const Spacing = useCallback(
    () => <div style={{marginTop: 64, marginBottom: 64}} />,
    []
  )
  return (
    <main className="App">
      <div>
        <Spacing />
        <RowBox flexSpacing={4}>
          <ChildBox flex="50%" width={200} height={200} bgcolor="#eeeeee">
            1.
          </ChildBox>
          <ChildBox flex="50%" width={200} height={200} bgcolor="#eeeeee">
            2.
          </ChildBox>
        </RowBox>
      </div>
    </main>
  )
}

export default IndexPage
