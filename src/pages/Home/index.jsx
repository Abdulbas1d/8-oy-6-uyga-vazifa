import React, { useEffect, useState } from 'react'
import './index.css'
import CoinPicture from '../../assets/images/coin.svg'
import TelegramIconPicture from '../../assets/images/telegram-icon.svg'
import ChartPicture from '../../assets/images/chart.svg'
import FollowPicture from '../../assets/images/follow.svg'
import ArrowIconPicture from '../../assets/images/arrowIcon.svg'
import currency from '../../assets/currency.json'

function Home() {
    const [open, setOpen] = useState(false)
    const [howMoney, setHowMoney] = useState("")
    const [selected, setSelected] = useState()

    useEffect(() => {
        setSelected(currency[0])
    }, [])

    return (
        <div className='container-home'>
            <div className="home">
                <h2>Global currency conversions & money transfers</h2>
                <h4>Leading the world in currency information and global transfers for 30+ years</h4>
            </div>
            <div className="datas">
                <div className="buttons">
                    <button className='oneBtn'>
                        <img src={CoinPicture} alt="" />
                        <span>Convert</span>
                    </button>
                    <button className='twoBtn'>
                        <img src={TelegramIconPicture} alt="" />
                        <span>Send</span>
                    </button>
                    <button className='threeBtn'>
                        <img src={ChartPicture} alt="" />
                        <span>Charts</span>
                    </button>
                    <button className='fourBtn'>
                        <img src={FollowPicture} alt="" />
                        <span>Alerts</span>
                    </button>
                </div>
                <form className="form">
                    <div className="selects">
                        <input value={howMoney} onChange={(e) => { setHowMoney(e.target.value) }} type="number" placeholder='Amount' />
                        {
                            !open && <>
                                <div className="openFalse">
                                    <label htmlFor="">From</label>
                                    <div className="flags">
                                        <img className='flag' src={selected?.Flag} alt="" />
                                        <p><strong>{selected?.Code} -</strong> {" "} {selected?.Currency}</p>
                                        <img className='arrow' src={ArrowIconPicture} alt="" />
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
