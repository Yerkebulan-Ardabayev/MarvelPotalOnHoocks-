import './appBanner.scss';
import avengers from '../../resources/img/Avengers.png';

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={avengers} alt="Avengers"/>
            <div className="app__banner-text">
                New comics every week!<br/>
                Stay tuned!
            </div>
        </div>
    )
}

export default AppBanner;