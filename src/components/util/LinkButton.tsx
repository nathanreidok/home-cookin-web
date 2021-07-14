import Button, { ButtonProps } from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const LinkButton = (props: ButtonProps<Link>) => <Button component={Link} {...props}></Button>

export default LinkButton