import {Box} from '@mui/system'
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
        <RowBox flexSpacing={6} responsive>
          <ChildBox flex="50%" width={200} height={200} bgcolor="#eeeeee">
            1.
          </ChildBox>
          <ChildBox flex="50%" width={200} height={200} bgcolor="#eeeeee">
            2.
          </ChildBox>
          <ChildBox flex={false} width={200} height={200} bgcolor="#eeeeee">
            3.
          </ChildBox>
        </RowBox>
        <Box display="flex" flexDirection={{xs: 'column', sm: 'row'}}>
          <Box>foo</Box>
          <Box>bar</Box>
        </Box>
      </div>
    </main>
  )
}

export default IndexPage
