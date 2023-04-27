import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Chart, LineController, LinearScale, PointElement, LineElement, CategoryScale} from 'chart.js';
import { useSpring, animated } from "react-spring";


Chart.register(LineController, LinearScale, PointElement, LineElement, CategoryScale);

function App() {
    const [bottlesCount, setBottlesCount] = useState(80000);
    const [bagsCount, setBagsCount] = useState(11000);
    const [containersCount, setContainersCount] = useState(6000);
    const [cigarettesCount, setCigarettesCount] = useState(4520);
    const [strawsCount, setStrawsCount] = useState(7140);
    const [wrappersCount, setWrappersCount] = useState(4310);
    const [wipesCount, setWipesCount] = useState(9110);

    const [bagsData, setBagsData] = useState([12, 19, 3, 5, 2, 3, 7]);

    const props = useSpring({
        from: { value: 0 },
        to: { value: bottlesCount },
        config: { duration: 1000 },
    });

    function initChart(canvas, data) {
        const ctx = canvas.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                // options for the chart
            }
        });
        return chart;
    }

    useEffect(() => {
        const intervals = [      Math.random() * 5000 + 1000,      Math.random() * 5000 + 1000,      Math.random() * 5000 + 1000,      Math.random() * 5000 + 1000,      Math.random() * 5000 + 1000,      Math.random() * 5000 + 1000,      Math.random() * 5000 + 1000,    ];

        const intervalIds = intervals.map((interval, index) => {
            return setInterval(() => {
                switch (index) {
                    case 0:
                        setBottlesCount(prevCount => prevCount + 1);
                        break;
                    case 1:
                        setBagsCount(prevCount => prevCount + 1);
                        break;
                    case 2:
                        setContainersCount(prevCount => prevCount + 1);
                        break;
                    case 3:
                        setCigarettesCount(prevCount => prevCount + 1);
                        break;
                    case 4:
                        setStrawsCount(prevCount => prevCount + 1);
                        break;
                    case 5:
                        setWrappersCount(prevCount => prevCount + 1);
                        break;
                    case 6:
                        setWipesCount(prevCount => prevCount + 1);
                        break;
                    default:
                        break;
                }
            }, interval);
        });

        return () => {
            intervalIds.forEach(intervalId => clearInterval(intervalId));
        };
    }, []);

    useEffect(() => {
        const canvas = document.getElementById('myChart');
        const chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Plastic Bottles Saved',
                data: [134024, 124300, 104523, 103146, 94013, 88211, 80034],
                borderColor: 'rgba(4, 99, 132, 1)',
                tension: 0.1
            }, ]
        };
        const chart = initChart(canvas, chartData);
        return () => {
            chart.destroy();
        }
    }, [bagsData]);

    useEffect(() => {
        const canvas = document.getElementById('myChart2');
        const chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Plastic Bottles Saved',
                data: [18002, 17521, 15244, 12455, 12111, 11984, 11042],
                borderColor: 'rgba(4, 99, 132, 1)',
                tension: 0.1
            },]
        };
        const chart = initChart(canvas, chartData);
        return () => {
            chart.destroy();
        }
    }, [bagsData]);

    return (
        <div className="App vh-100" style={{ background: "#E9E9E9" }}>
            <div className="container py-5">
                {/* Row 1: Main Heading */}
                <h1>Newport Green Scheme</h1>
                {/* Row 2: Two rows and one block */}
                <div className="d-flex h-100">
                    {/* Left Column: Two Rows */}
                    <div className="col-md-8 d-flex flex-column">
                        {/* Row 3: First Row */}
                        <div className="row bg-light m-2 rounded flex-grow-1">
                            <div className="left-side col d-flex flex-column py-5 h-100">
                                <h4 className="col">
                                    Single Use Plastic Bottles Saved
                                </h4>
                                <h3 className="col">{bottlesCount}</h3>
                                <h5 className="col">Bottles this month</h5>
                                <h5 className="col">
                                    <b className="text-success">↓ 11%</b>{" "}
                                    Decrease from last month
                                </h5>
                            </div>
                            <div className="col-1 d-flex align-items-center justify-content-center">
                                <div className="bg-dark h-75 text-dark">.</div>
                            </div>
                            <div className="right-side col h-100">
                                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                                    <canvas id="myChart"></canvas>
                                </div>
                            </div>
                        </div>
                        {/* Row 4: Second Row */}
                        <div className="row bg-light m-2 rounded flex-grow-1">
                            <div className="left-side col d-flex flex-column py-5 h-100">
                                <h4 className="col">
                                    Single Use Plastic Bags Saved
                                </h4>
                                <h3 className="col">{bagsCount}</h3>
                                <h5 className="col">Bags this month</h5>
                                <h5 className="col">
                                    <b className="text-success">↓ 2%</b>{" "}
                                    Decrease from last month
                                </h5>
                            </div>
                            <div className="col-1 d-flex align-items-center justify-content-center">
                                <div className="bg-dark mx-1 h-75 text-dark">
                                    .
                                </div>
                            </div>
                            {/*vertical hr*/}
                            <div className="right-side col h-100">
                                <div className="d-flex justify-content-center align-items-center w-100 h-100">
                                    <canvas id="myChart2"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column: Plastics Saved */}
                    <div className="col-md-4">
                        <div className="row bg-light m-2 rounded h-100">
                            <div className="left-side col h-100">
                                <div className="d-flex justify-content-between align-items-end w-100">
                                    <h2>Plastics Saved</h2>
                                    <h5>This Month</h5>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p>
                                        <b>Plastic Bottles</b>
                                    </p>
                                    <p>{bottlesCount}</p>
                                    <p className="text-success">
                                        <b>↓ 2%</b>
                                    </p>
                                </div>
                                <hr className="w-100" />
                                <div className="d-flex justify-content-between">
                                    <p>
                                        <b>Plastic Bags</b>
                                    </p>
                                    <p>{bagsCount}</p>
                                    <p className="text-danger">
                                        <b>↑ 1%</b>
                                    </p>
                                </div>
                                <hr className="w-100" />
                                <div className="d-flex justify-content-between">
                                    <p>
                                        <b>Plastic Containers</b>
                                    </p>
                                    <p>{containersCount}</p>
                                    <p className="text-danger">
                                        <b>↑ 1.75%</b>
                                    </p>
                                </div>
                                <hr className="w-100" />
                                <div className="d-flex justify-content-between">
                                    <p>
                                        <b>Cigarettes</b>
                                    </p>
                                    <p>{cigarettesCount}</p>
                                    <p className="text-danger">
                                        <b>↓ 3%</b>
                                    </p>
                                </div>
                                <hr className="w-100" />
                                <div className="d-flex justify-content-between">
                                    <p>
                                        <b>Plastic Straws</b>
                                    </p>
                                    <p>{strawsCount}</p>
                                    <p className="text-danger">
                                        <b>↓ 0.2%</b>
                                    </p>
                                </div>
                                <hr className="w-100" />
                                <div className="d-flex justify-content-between">
                                    <p>
                                        <b>Plastic Wrappers</b>
                                    </p>
                                    <p>{wrappersCount}</p>
                                    <p className="text-danger">
                                        <b>↓ 1.4%</b>
                                    </p>
                                </div>
                                <hr className="w-100" />
                                <div className="d-flex justify-content-between">
                                    <p>
                                        <b>Wet Wipes</b>
                                    </p>
                                    <p>{wipesCount}</p>
                                    <p className="text-danger">
                                        <b>↓ 4.6%</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex my-3">
                    <div className="mx-2 p-2 w-100 rounded bg-light">
                        <h4>Ways to reduce single user plastic waste</h4>
                        <h2>Carry and refill a reusable bottle</h2>
                    </div>

                    {/*Bottom right row*/}
                    <div className="p-2 rounded w-100 bg-light">
                        <h4>Upcoming Events</h4>
                        <div className="d-flex justify-center px-5">
                        <div className="d-flex flex-column">
                            <h4>15</h4>
                            <h5>Jun</h5>
                            </div>
                            <h4 className="w-75">
                                Festival of Sustainable Business Exhibition
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
