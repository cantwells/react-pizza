import React from 'react'
import { Categories, Sort } from '.'

const Main = () => {
    return (
        <div className="content">
            <div className="container">
                <nav className="nav">
                    <Categories />
                    <Sort items={ ['популярности', 'по цене', 'по алфавиту'] }/>
                </nav>
            </div>
            <div className="pizzas">
                <h1>Все пиццы</h1>
                <div className="pizza__items">
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span>
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span>
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span>
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span>
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span>
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span> 
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span>
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg" alt="pizza" />
                        <p className="item__name">Чизбургер-пицца</p>
                        <div className="item__properties">
                            <div className="item__types">
                                <div className="item__type active">тонкое</div>
                                <div className="item__type">традиционное</div>
                            </div>
                            <div className="item__sizes">
                                <div className="item__size active">26 см</div>
                                <div className="item__size">30 см</div>
                                <div className="item__size">40 см</div>
                            </div>
                        </div>
                        <div className="item__order">
                            <div className="item__price">от 395 ₽</div>
                            <div className="button button--outline button--add">
                                <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E"/>
                                    <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E"/>
                                </svg>
                                <span> Добавить</span> 
                                <span className="amount">2</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main