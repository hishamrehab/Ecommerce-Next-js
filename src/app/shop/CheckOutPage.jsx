"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../components/modal.css";

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    const router = useRouter();



    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);




    const handleOrderConfirm = () => {
        alert("Your Order is placed successfully!");
        localStorage.removeItem("cart");
        router.push("/");
    };






    return (
        <div className='modalCard'>
            <Button variant="primary" className="py-2" onClick={handleShow}>
                Proceed to CheckOut
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >
                <div className='modal-dialog'>
                    <h5 className='px-3 mb-3'>Select your Payment Method</h5>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>

                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                            id='visa-tab'
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabChange("visa")}
                                            href='#visa'><img src='https://i.imgur.com/sB4jftM.png' alt='' width="88" /></a>
                                    </li>



                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === "paypal"}
                                            onClick={() => handleTabChange("paypal")}
                                            href='#paypal'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbUAAABzCAMAAAAosmzyAAAA/1BMVEX///8AMIcAcOAAHGQAbuAALoYAat8AbN8AZt4Aad8AK4X7/P0Ac+EAGmMAYt4ACn0AJoMAGH8KM4kbMnIAG4AAIoIAE10AH4HKz98AJYPT1uQAGoArYbAAE37T3/dIYqE8WJtIkOeKsu1sf7E8g+Nso+rw9/3u8fff5O/q9P3p7fStuNPj7vtjd6uewvHa6Pp8jbiMm8GuzPM1UZghfuN6ibWgq8lUa6W91PURJ2qQue9jnemlsc6gv/DG3Pe+x9whQpAaP48AAHsmQ4kUKmxCieUGMXx/qusmS5Ycbs8dVaVpoeoYOYEZcdYfR4xalOcACFYgbMMIY8YRS6QbW7LXX+iYAAAS1klEQVR4nO1da0PaShNGyxISFAIFAT2IeAFEEC94qVqRnlJptaen5z3//7e8XJOd2dmwG9JGjzzf2mBuk519ZubZ2UgEIHHSYytzkekNyheXhVpkiReBq+x8mw3BmGXn0/md03rYN7xEJLK5pTDSXNtZ+fz5Udj3vMSR2lDjDZfuLe0WMk5zmlYbGa5U3gz7vt82Wra+1VZW7Oxp2Df+lpHYsfxYbYWlr6ph3/vbRS2jQ0Z45M6XYUBYqJd8Gm3oJXtLs4WE7pZvq63Y50snGQ78UEgHuauwb/+N4sIXhZwhvWSSoeDcH4WcgpWW+a0wkF/EaMOpbekjQ0AjtZjVVkrdsB/hDaKbXtBq1k7Yj/AGcbeghxwOtmVG8rfjorio1Yp7YT/D24PPLCQHZoX9DG8PKuKDOcguXeRvRmPhobaykr8M+yneGjZ1C9kE7FbYT/HWIJMfsMx8rDA2dq+Lcf9EQE/yq5GQ4fdcEhw4oXPHrPf8fi6+/NnrZYaGYw/+CzZ3wxPQ6A1aJ0eNRR88MDyuydDp3+5eHwZ/xe0OuMwZd4iWH7De5/X5eLe+/vnz8wNjGd8vt2ZbMqsxy85lc+cnLyPPuZ1clSFqGLH4av9j0Ibrx8BV1twjCTp3zP5cf6eI9XfvH1Z8W21eSZZZufSL0BUdm1KrTWCY5kEzyCtW1+AFOu6hGiOJP3tWttrQbhvPZ/KLe0NB1cesVCt8R7kbo43FIxbfDXCSa8IrGrfuIcm3nvmgbrSh2d6v9n1+ZpdKJdmiFbr8shKdb7XVVbPTDuyK93H4Sdy4h+hvnfXea4y1odXWjPiN/PoeUFT1sdJFQO/CL9YkdkKIJo+DuiLyySbnzyTyA82x9mX4TPEffrzDg2qQvxVuTJiQkxEEn5+viEfoIePcKN6jKeSDzlB7t/Ft/DH0fSh/1It7+VDN1o6TJiLNFtBoQz7Z5N7uYFEKObbaH+PzxjraZtNR9YWqUDlTt9pq8jqQS0KfHO1wrixN546/aFlt/evks4jt6zpJnZIsS4dYNFehkC6CiNyq0CdHf7iHJN+65lh7N/sszFv5XZC41CnJWr3wkl8/DA2jxX7MP+FcYAr56B6SKFiZFoXcOHc8sK5Pp6dVGfLh+ciOEvGfIXm/+BXPEIXk3iwtP2AZrZG28ZM7uV7cpleSZVZYSmecp5gDo7/4JZFPjnMfgoRCDrSitc/cIxkVnTtLoJIssx1YFjHjhlbIa6NpLRqbwYhSozC+vfAlEYU0uOFAf+usp+Ugv4H71SFQdXh59rA3Q+tqkM8LdgtNDnYNJ5lo/2CKp9tKJy4yldjBwpdEo3uNczO0/EArC/nuw3fwTegMtk1IIYsn3LFE45LhFADbCqkAcAMnGfBpVtu7ccxVovpBEEIVDrXovnuoTk8rWhRyY4Ccg0YmDk2r+Tt4OLGHp92wXOSBPE8xwmEfDzedt0AC+WTjyT20KVkEpZPPWv8O75enqPNwAlV96QL+wR4abcWQ0pFokonjECTRR6PNXDRBgnyy+dE9JMsda1ht45swG6vfGsodp8SSeA66cKu84MvwhyrOUwi/aKM8ZWx3wUt6+OQTUsGqY7X19wInTirzpwTMp1G6SpTdZj3xJ7XC5UX5vNcbXJ0eNX5NHH4IP3yDiKLRaIw9iT+pXn98qux3Ov3bm/mChVs4eJOcx72ig1ydcO0rNhoYzN6oQZZIMcQC5CuMoeONu6tiKV8cxgljwULpfNZ4qLbJY/LWpv8ojCErkNcLAOPT4TwFMZA+wrEhGLZ9UzHjZiw6xEiwYFaOp3yluc3BtQ1yuUn3TDL5wV/KZASy/ukNK6e1NmE+jZq0avAnaDgWruws/PCsfHFc+K49lNIOSqkxOS2n0hxS9BR5WuJ/lC5tjc6GS13EpHXtORzP+jETmiFqro4L320jzmNWRMM+mRON1Oihpk78N/4icgaE15cATasUQcRW4z1kYVCiHsBOnSYiXfB31vnoBcFaHstTwrI6SqdPFlXiUhcxByCrAQ95tiqEBmPjG0MbPYIPwonzmvKhK5MffFa02sYzmehZU51c0KS1ReT00S1yTrTRKknSYSx7XoOnnshs8eUoVQOeM3LjEemRp3AsA18z50S3+9IqT/wWzV/mrKTq4ZMlFDKjmDve+PydzKmuqRYq0CuiQmh0i7azfKdb9FgLZD+UgUVzYw9Zh3MkpZg+QpUjtjIekCjipUJoNBxdJ3oT90g8m/0ONOOMKvqRHyhZbTjSJPejmkGG7WlYhnBZKFHqONGTkueiEgaHYX48rPA0nhWulsCKtdL4D3Gpi0r/IK8zc6LVinc5Fb1Bc0ZHPOQHEgWrmvxgOKfJPiLVsQblBxSFrCLjzBY4tvQWuKYnf4Z01mJQf4JyMdNb2kbuikgy3qN4bepvqh2taqrrpnAgwY1uWmqjlM9a3/gmLV6sKebg0JxFeawLHK5NhmNLc32rNdFTbsI/EzhrHZ2WbU2sjeQHFIVERH06HHWN5mYb0f/z8gOJaENBfrDx4Sd93bHV1IyGS7I5seZ5lIVDbWrYC81uRNZg+tAwWW49oMsJVGSazfYodU2xi5TJE8MmhPTkHDhU8VfID9b/HnyXXHcVpqc9geQHWYFCHqF81vQnl7qNv5w8GMwFsTyMtLGIhWWmTgPJD2JCZhgbbVocvp2nMsdwqGLg8oP19Y1nj4GmEWWjaRW9wyG1x1Iklhn9/6ZEoSSH4woL0N5wdCdWSCoSEeQHURTZtPvYOpMxc6yh65rACbI95Ae01Ma7JLq+sf78U0pDJpdQzWjBkiyz3ekwUasftbYEaj/WjSRoMaAX3AoQNAzMRZ+i12HPjh7Kc8eJw/ZxX6T2Y91IU0tqMrHaLHz3COt15QfDUfb3529f50koCLdPoopLsjvnMwx6+awtjChmjz7yUyLItHLZrXQ2R4kWRthyyCJs+MCy3KqPOv5I8rPwEcsP1vYddNZMUzTOpDL8g5jUorFR2iomE3zFZx8uopBRLpaSNND6MrQOhQ8f/vx3rsmGMNWMFqlju1guyJU+W6Mh0xACNZa3d06Out3u5RUTRQsjpJ3wHSWj+TIspiKuIOwae7qoC/oNjIbGtaAxj5qrlZvr6+uz3b4hoSmzS2L5geuTsdRm9hKePwz+EPDz5z/f1XRKVBmDREGzqdAkeNrDQ6LI3P0FGqcW4T/YlnNNNL4ttwcYpiKc+PJGk1SYY+6wjy1qdo6dQLZ5QAxRN3w/RK+Uk3zVJbnjne84YtdCXHUtm5aCdYhxHreG0jms1AIZlcaOmO+xBu5xOCuwkmOaDHI8KZfRHmgGXeORcY8HaByWd7aJl+xQxW2U1OTlB/S3zr4uYjP1GFu3qdCE0eEqafYOn/ZKMJvN9R7qwlnRSVgLVITrxIfVBXMwyUpVUNi9imf7akc4rUMVPeQHkgZaPT3BJoa6puxKiwumxxEvJpApMW8vcky+AoQyjTOD4jmW2W4mW1PBOvE1aKGnm2B00RZGh8PjcFjPyQ/ob509LGY14vZoJB50wq7sJCuC2cQJceICDkNB+A6DRDadvVroXfB7FRxqhV3JybjwkuLNIMyXDoXUlh+w//ky1gzqheyaxu44LD0dE/BLs87JM5fRYAPdYhHryI6Dgi7KtvAzoThDeWG20AFyEYkDwn/sUMU+koS5fyKJVq0//JlriqSyzn9TPS/FSrNPH+a7xRzYGLhsaPO5jAQ8OEmP9DAV4asBc7sfuDBiUyqG84h0FQTF0g6F9JCE1XCSb/qG/vFvshnpVcKRMoUs5mbWqYHajmSoYdXCRH7gALrI8UEcuBdB9eFRmUK6a+khnZDN9Vi14MgPkAaF81+Sbz3jkReeCx2htGpDeivt9q2A7k0qRIbVVlQBQuXqoftsYCoC26eoUkjD3JWEeLJsUROOSEd+gK3Jdz+gv/WFrKazNEOi6oNgVmnAuUFIe6U9YKHvRxWgBmSRQ9MLVAR+DWpGiyUrHGeAdCIeoYH8qPP2MJVRkB8sQCHjGmLxyPzdcUb785XB1AWL0SnZqWECJIuiA/i5WGXsdAAVGVJIhe4Hhmk8Ae4MyIi0dIVO7VSAPFYVSCgkIXBURUxnrV0CO2jGpSEt287lS1b5Eul/wJwkbQGbgNnILTQkEVmxznGBBv5eoJBRHkbMjMfXfpwhugE+fSmvRo0VnPwELozPXwT1r2+jGVqrf5BgasVeKXNo7Z3ebYriH8DpJ9U26tTgg2AMtXNq5PA0BpBDXZzPcJm6U+Fwe3Bz1hafG37NssQDPLU7JJHR+B4FdKcP/xTSUBbUjYFSS5bSXg6gIsfykl/BBCdyeBExnoMvACvFUJ5CadlFAr52WT4d1sidIYkcp4KClYm6fUWjdfRWZKNpVRJ6IcA6KrEEZwxIRsRlOHdeHdeExCaWH6g8JrSaTEhTRd+DTME6X35g+aSQZkezx8Yc+QENOEowzZiiAI0irh6oeTQUEmNAJD8wlJ4OvhxJ6kGW9cLyA45CSuokPX9GixMLf7yB5Ac5pTlxD9E/6jeCVlW0rdxFsjTWP2P5gZqUCZqa9qpN/A4lClaTkx9IFKxoua4aDEN7ZWQNkiEps4CAbpXlBRlqREx0iFpVj8qemI5uo2USanlWlEgkq1dYoZCckQ4P+YGk+4GP3LERr+g3h6wXPXQ3UmDSPhDXgRxhBVdJ7Ahap5N5rkqWg0epywNouMQIWz8KSenZESw/cP9GkNpM34M28Tfi+36afaGSC6FgpYApVFFkGlhWwtLEeWQuMi160xt5qcsDOFyICz5SMJqTO0aeE8oP6HBNs5AdS+77a56LFayKvVaxCihXBiOpupfFjyUSf/HqM9jEiH9CpS41t9LECZX4AXALzYpQSHAmPyw/4KI9mdRGw2LRmLn65Ldh1MW87gc0BDGgbZ86r6N2KjQogfIDB3VSyyVSkYiQp4gprs0T+m7FOu7n3XwktHUOVcSrCjifLFGwygvZMR7mKI1T2b33v3YdyQ9KimkVsTMhy2dbl91C9+i0XKJsQRcGyNoi1VwNRV7KanhBQ74aja8dHF/fXx8/7iep2s8C8gOZaMRYPdjlcHN831yoeQ1S9THVHoIJXL8c/bGdy6a38jl6rqIWoNKpc7KRIXJ1yqX6NlVKHeUsRyvqyVcslR9wPpmW2sgopNEPuCMELlwq702qK8ejKGSEzgyRTUNxqUu5jcit5nIaZ7FTAgkpOVGwRGojlR8Eur1ARJhWi5Rqh0RifoEHgDHaJ4i6a3pX24/yUpc3NBolT6wmkx9wPrkmcK3JM9K54yDaHUIodD+QoKu3ea21Q3sJ0UVmycZqcxpoeeBRT7EslR/wClYt+QHVqGYxnM5bayuH0BHNEySFjIjLQoGWjgPWfWtkW/e1xK9SBevczRdkVlPv1qOKMspCajQQTJzrdN2Vhe8FNNaoNMsISEXV0Zjf21rCe4dCesgPJBuNZCRnDKbVOQfU/UBMJHmgltEwm6wChKm/ZNNvpGAlux9Ise3VswLDUJAftGgKKZEfiEtaF0QVJgs1W6zWzj3kXXhNMD2KvbV0LjxKXQrYXlV3kk6CGftkfvMFLfmBEXQnOLQtpu4Ol9WWrNsIy8InY/QeY0KzA1uy6ZRHqUsFzX0ZJYma+/DfDlU00f9z716yfxdNIdUbY6miSwmAdXCZo9L2LGffdaH84IH8c6x0yso4LF5pq5vASzwSTZFHeZLOPUxLO+E7Dut59QLdsMOi5Qfq2n1VXMJCumRS8ULthOWRl7ey7KQauQORIJUPFvsuyUTMQqyc1N8Uo3kbwwsMhzY7xqd29iRCeyqCYkGtnCLwic5nxYLa5chBo/eJv6yvBquNy51U1tnf0s6nBpcjTlPjT/3JpoQNVRypp6Tyh3szycNXg9XmbidpGlPLRWPxZOVsvCzR4M/s6tsq4IpIjUPtRXtIZ2HUEwLqCGQT3PrR3oNlF4tFq3d159COuWfGzZSxlk56n75vtP3xdi1qjJr/d54c6aTszLpXJFOeAfTL/qVo1Ot6fXMLuAXkiv8diDWQOGw2f8FGv8Ri/6nVXsuO1mrAKci0sEj4dYHerip4ChkqLlGoFtp+HEHhlgwKlVtRvAo0sA409TL24/YPoUXGhELqJQReOOgWua8YhzTxX3gbiJcEoUVu5rVP2k0JhVx8V6oXgxpWMKiKw14uJBSS6qj9WiG0yA1nB5UgQfeLWnxTqpeDTVQIZ6XXTkVk/aKClx+EBxyqkV1mXhn6NIVcfNu+lwIhVAtxU+CgkJBQyMDlB6FhJ2cBpELcgDsoVOnF/to1pZeL7g7Eq+ePEWm/KOV2ZkuEAUm/qFjY97WEF+h+Uf+x3PF/DhWSQgYvP1giSEgoZODygyUCxG+UHywRGCTyA/U2nUuEAXIfE1NLI73Eb0dbWEs8ZJBP/53U8avH/wE3ywV7SyWnjAAAAABJRU5ErkJggg==' alt='' width="88" /></a>
                                    </li>

                                </ul>


                                {/* content */}
                                <div className='tab-content' id="myTabContent">
                                    {/* visa content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ''}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'>
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Credit card</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='name' id='name' className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                            </div>

                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='number' id='number' className='form-control' min="1" max="999" required />
                                                    <span>Card Number</span>
                                                    <i className='fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type='text' name='expiration' id='expiration' className='form-control' min="1" max="999" required />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type='text' name='cvv' id='cvv' className='form-control' min="1" max="999" required />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* paypal content */}
                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ''}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'>
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='email' id='email' className='form-control' required />
                                                    <span>Enter Your Email</span>
                                                </div>
                                            </div>

                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='name' id='name' className='form-control' min="1" max="999" required />
                                                    <span>Your Name</span>
                                                </div>

                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type='text' name='extra' id='extra' className='form-control' min="1" max="999" required />
                                                        <span>Extra Info</span>
                                                    </div>
                                                </div>

                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add PayPal</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* payment disclaimer */}
                                <p className='mt-3 px-4 p-Disclaimer'>
                                    <em>Payment Disclaimer:</em> In the event of partial payment by the owner for any material or services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CheckOutPage;
