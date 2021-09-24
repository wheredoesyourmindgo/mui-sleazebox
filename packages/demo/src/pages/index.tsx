import {Typography} from '@mui/material'
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
        <Typography variant="caption">Responsive break at 'xs'</Typography>
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
        <Spacing />
        <Typography variant="caption">Responsive break at 'sm'</Typography>
        <RowBox flexSpacing={6} responsive="sm">
          <ChildBox flex="50%" width={200} height={200} bgcolor="#eeeeee">
            4.
          </ChildBox>
          <ChildBox flex="50%" width={200} height={200} bgcolor="#eeeeee">
            5.
          </ChildBox>
          <ChildBox flex={false} width={200} height={200} bgcolor="#eeeeee">
            6.
          </ChildBox>
        </RowBox>
      </div>
    </main>
  )
}

export default IndexPage
