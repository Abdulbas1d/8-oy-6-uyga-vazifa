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
    const [openTwo, setOpenTwo] = useState(false)
    const [howMoney, setHowMoney] = useState("")
    const [selected, setSelected] = useState()
    const [selectedTwo, setSelectedTwo] = useState()
    const [search, setSearch] = useState("")
    const [searchTwo, setSearchTwo] = useState("")
    const [result, setResult] = useState(0)

    useEffect(() => {
        setSelected(currency[0])
        setSelectedTwo(currency[1])
    }, [])

    useEffect(() => {
        if (howMoney && selected) {
            setResult((parseFloat(howMoney) * selected.Rate).toFixed(2))
        }
    }, [howMoney, selected, selectedTwo])

    function handleOpen() {
        setOpen(true)
        setOpenTwo(false)
    }

    function handleOpenTwo() {
        setOpenTwo(true)
        setOpen(false)
    }

    function handleSelectCurrency(item) {
        setSelected(item)
        setOpen(false)
    }

    function handleSelectCurrencyTwo(item) {
        setSelectedTwo(item)
        setOpenTwo(false)
    }

    const filteredCurrencies = currency.filter(data =>
        data.Code.toLowerCase().includes(search.toLowerCase()) ||
        data.Currency.toLowerCase().includes(search.toLowerCase())
    )

    const filteredCurrenciesTwo = currency.filter(data =>
        data.Code.toLowerCase().includes(searchTwo.toLowerCase()) ||
        data.Currency.toLowerCase().includes(searchTwo.toLowerCase())
    )

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
                        <div className="one" onClick={handleOpen}>
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

                            <div className="datas-money">
                                {
                                    open && <>
                                        <div className="openTrue">
                                            <input value={search} onChange={(e) => { setSearch(e.target.value) }} type="search" placeholder='Type to search...' />
                                        </div>
                                    </>
                                }

                                {
                                    open && <>
                                        <div className="manyFlags">
                                            {
                                                filteredCurrencies.length > 0 && filteredCurrencies.map((data, index) => (
                                                    <div className='manyFlag' key={index} onClick={() => handleSelectCurrency(data)}>
                                                        <img src={data?.Flag} alt="" />
                                                        <p><strong>{data?.Code}</strong>{" "} {data?.Currency}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                        </div>

                        <div className="two" onClick={handleOpenTwo}>
                            {
                                !openTwo && <>
                                    <div className="openFalse">
                                        <label htmlFor="">To</label>
                                        <div className="flags">
                                            <img className='flag' src={selectedTwo?.Flag} alt="" />
                                            <p><strong>{selectedTwo?.Code} -</strong> {" "} {selectedTwo?.Currency}</p>
                                            <img className='arrow' src={ArrowIconPicture} alt="" />
                                        </div>
                                    </div>
                                </>
                            }

                            <div className="datas-money">
                                {
                                    openTwo && <>
                                        <div className="openTrue">
                                            <input value={searchTwo} onChange={(e) => { setSearchTwo(e.target.value) }} type="search" placeholder='Type to search...' />
                                        </div>
                                    </>
                                }

                                {
                                    openTwo && <>
                                        <div className="manyFlags">
                                            {filteredCurrenciesTwo.map((data, index) => (
                                                <div key={index} className="manyFlag" onClick={() => handleSelectCurrencyTwo(data)}>
                                                    <img src={data?.Flag} alt="" />
                                                    <p><strong>{data?.Code}</strong> {data?.Currency}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>


                    <div className="prices">
                        <h2>{result}</h2>

                        <button className="converter">Converter</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
