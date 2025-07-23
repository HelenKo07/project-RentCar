import Navigation from '../../components/Navigation/Navigation.jsx'
import PageTitle from '../../PageTitle/PageTitle.jsx'
import css from './HomePage.module.css'

export default function HomePage() {
    return (
        <div className={css.homePage}>
<Navigation/>
<PageTitle/>
        </div>
    )
}