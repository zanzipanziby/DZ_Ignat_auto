import s from './Loader.module.css'
import loader from '../../assets/loader/loader.svg'

export const Loader = () => <div className={s.loader}><img src={loader} alt="loader"/></div>
