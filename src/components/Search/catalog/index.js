import React,{Component} from 'react';
export default class Catalog extends Component{
    render(){
        return (
            <div className="search-catalog">
                <div className="search-record">
                    <div className="record-catalog">
                        <span>最近搜索</span>
                        <a onClick={() => {
                            localStorage.clear();
                            this.setState({
                                recent: [],
                            });
                        }} href="javascript:;">清空</a>
                    </div>
                    <ul className="record-list">
                        {
                            this.state.recent.map((item, index) => (
                                <li onClick={() => {
                                    this.$input.value = item;
                                }} key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
                {
                    url === '/home' ?
                        <div className="search-classify">
                            <div className="classify-catalog">
                                <span>类别</span>
                            </div>
                            <ul className="classify-list">
                                {
                                    this.state.search.data.map((item, index) => (
                                        <li key={index}><Link to='/recipe/search'>{item.category_name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div> : null}
                <div className="star-level">
                    <div className="star-diff">
                        <span>难度</span>
                    </div>
                    <ul className="star-list">
                        {
                            star.map((item, index) => (
                                <li onClick={() => {
                                    console.log(index);
                                    this.starClick(index)
                                }} key={index}>{item + '星'}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
