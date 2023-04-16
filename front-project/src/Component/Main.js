import './Main.css';

const Main = () => {
    return(
        <>
        <div id="container">
        <div class = "backImg">
            <div class="nav">
                <ul class="subnav">
                    <li class="home" href="#home"><a href="">HOME</a></li>
                    <li href="#home"><a href="">PLAYER</a></li>
                    <li href="#home"><a href="">MEDIA</a></li>
                    <li href="#home"><a href="">STORE</a></li> 
                    <li href="#home"><a href="">TICKET</a></li>
                </ul> 
                <header class = "header">
                    <div>이미지보일부분</div>
                </header>
            </div>
            <div id = "main">
                <div class = "title">KT위즈는 우승을 향햐 달려갑니다</div>
                <div class = "main">
                    <div class = "item item2">
                        <div>리그순위</div>
                        <table class = "table">
                            <thead>
                                <th>순위</th>
                                <th>팀이름</th>
                                <th>승</th>
                                <th>패</th>
                                <th>승률</th>
                            </thead>
                            <tbody>
                                <td>5</td>
                                <td>KT위즈</td>
                                <td>7</td>
                                <td>4</td>
                                <td>40%</td>
                            </tbody> 
                        </table>
                    </div>
                    <div class = "item item3">티켓구매하기</div>
                    <div class = "item item4">선수소개</div>
                    <div class = "item item1">경기일정</div>
                </div>
                <div class = "news">
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    <div class = "KTNEWS">KT NEWS</div>
                    
                </div>
            </div> 
        </div>
    </div>
    <div id = "container2">
        
    </div>
    <footer id = "footer">asdf</footer>
    </>
    )
} 
export default Main;