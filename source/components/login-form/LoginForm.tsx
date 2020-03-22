import React, { FunctionComponent } from 'react'
import {
  TextField,
  makeStyles,
  Theme,
  createStyles,
  Button,
  Link,
  Divider
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%'
      }
    }
  })
)

const conf = [
  {
    label: 'Email'
  },
  {
    label: 'Passwort'
  }
]
export const LoginForm: FunctionComponent = () => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {conf.map(({ label }) => (
        <TextField key={label} id={label} label={label} />
      ))}
      <Divider />
      <Button>Login</Button>
      <Link href="/overlay/register">Registrieren</Link>
      <Link href="/">Passwort vergessen</Link>
    </form>
  )
}