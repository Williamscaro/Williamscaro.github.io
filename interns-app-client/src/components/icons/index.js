import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faTasks,faTachometerAlt,faUser,faUserCog,faStickyNote,faCogs,faSignOutAlt,faBars,faDoorOpen,faDoorClosed} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faGithub,faYoutube,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'


const FacebookIcon = () => {return <FontAwesomeIcon icon={faFacebook} />}
const GithubIcon = () => {return <FontAwesomeIcon icon={faGithub} />}
const LinkedinIcon = () => {return <FontAwesomeIcon icon={faLinkedinIn} />}
const YoutubeIcon = () => {return <FontAwesomeIcon icon={faYoutube} />}
const TasksIcon = () => {return <FontAwesomeIcon icon={faTasks} />}
const TachometerAltIcon = () => {return <FontAwesomeIcon icon={faTachometerAlt} />}
const UserIcon = () => {return <FontAwesomeIcon icon={faUser} />}
const UserCogIcon = () => {return <FontAwesomeIcon icon={faUserCog} />}
const StickyNoteIcon = () => {return <FontAwesomeIcon icon={faStickyNote} />}
const CogsIcon = () => {return <FontAwesomeIcon icon={faCogs} />}
const SignoutaltIcon = () => {return <FontAwesomeIcon icon={faSignOutAlt} />}
const BarsIcon = () => {return <FontAwesomeIcon icon={faBars} />}
const DoorOpenIcon = () => {return <FontAwesomeIcon icon={faDoorOpen} />}
const DoorClosedIcon = () => {return <FontAwesomeIcon icon={faDoorClosed} />}


export  {FacebookIcon, GithubIcon, YoutubeIcon, LinkedinIcon,TasksIcon,TachometerAltIcon,UserIcon,UserCogIcon,StickyNoteIcon,CogsIcon, SignoutaltIcon,BarsIcon,DoorOpenIcon,DoorClosedIcon};
