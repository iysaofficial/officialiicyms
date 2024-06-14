
import "../css/news.css";

const News = () => {
    return (
        <>
        {/* <!-- Breadcrumbs Start --> */}
        <div class="rs-breadcrumbs bg7 breadcrumbs-overlay">
                <div class="breadcrumbs-inner">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12 text-center">
                            <h1 class="page-title">News</h1>
                            <ul>
                            <li>
                                <a class="active" href="/">Home</a>
                            </li>
                            <li>News</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumbs End */}
        <section>
            <div class="footer-top">
                <div class="container">
                    <h2 class="text-center mt-50" >News 2023</h2>

                    <div class="row">
                    <div class="card-news mt-5 mx-auto col-lg-3 col-md-12">
                            <img src="../images/news5.jpg" class="card-img-top" alt="..." />
                            <div class="card-news-body">
                                <h5 class="card-news-title">2 Madrassa students win gold at IICYMS 2023 for creating apps for students with disabilities</h5>
                                <p class="card-text">2 Madrasah students win gold at 2023 IICYMS 2 Madrasah students win gold at 2023 IICYMS". For more details visit...</p>
                                <a href="/news4" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                        <div class="card-news mt-5 mx-auto col-lg-3 col-md-12">
                            <img src="../images/news7.jpg" class="card-img-top" alt="..." />
                            <div class="card-news-body">
                                <h5 class="card-news-title">Unsoed student wins gold medal at IICYMS for drug waste degradation work</h5>
                                <p class="card-text">Unsoed student wins gold medal at IICYMS for degrading drug waste...</p>
                                <a href="/news5" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                        

                        <h2 class="text-center">Berita 2022</h2>
                        <div class="card-news mt-5 mx-auto col-lg-3 col-md-12">
                            <img src="../images/news1.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-news-title">UNAIR students win silver medal at International Invention Competition For Young Moslem Scientists (IICYMS) 2022</h5>
                                <p class="card-text"> UNAIR students win silver medal at International Invention Competition For Young Moslem Scientists (IICYMS) 2022.</p>
                                <a href="/news1" class="btn btn-primary">Read more</a>
                            </div>
                        </div>

                        <div class="card-news mt-5 mx-auto col-lg-3 col-md-12" >
                            <img src="../images/news2.jpg" class="card-img-top" alt="..." />
                            <div class="card-news-body">
                                <h5 class="card-news-title">UB Student Team Won Award at the 2022 IICYMS International Competition</h5>
                                <p class="card-text">  A collaboration of students team from the Faculty of Engineering (FT), Faculty of Mathematics and Natural Sciences (F-MIPA), and the Faculty of Economics and Business (FEB) Universitas Brawijaya (UB) won the Silver Medal...</p>
                                <a href="/news2" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                        <div class="card-news mt-5 mx-auto col-lg-3 col-md-12">
                            <img src="../images/news3.jpeg" class="card-img-top" alt="..." />
                            <div class="card-news-body">
                                <h5 class="card-news-title">Unila Team Won Silver Medal at International Invention
                                    Competition for Young Moslem Scientists (IICYMS) 2022</h5>
                                <p class="card-text"> (Unila): The Lampung University (Unila) team led by Indah Sukma Ningsih (Biology 2018) and consisting of Raihan Adhiyatma Atalla (Biology 2019), Al Khasanah (Agricultural Product Technology 2019), Susanto (Agronomy 2018), and Renaldy Jovanda (History Education 2019) won a silver medal....</p>
                                <a href="/news3" class="btn btn-primary">Read more</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
   }
   export default News