import { Container, Banner, Card } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

export function Home() {


    return (
        <Container>
            <Header/>
            <div className="content">
                <Banner>
                    <div className="banner-image"><img src="../../src/assets/images/banner-image.png" /></div>
                    <div className="banner-text">
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Banner>

                <div className="cards">
                    <p>Refeições</p>


                    <Swiper
                        grabCursor={true}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.20": {
                                slidesPerView: 4,
                                spaceBetween: 160,
                            },
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >

                    </Swiper>
                </div>
            </div>

            <Footer/>
        </Container>
    )
}