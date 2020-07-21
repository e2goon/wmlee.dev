import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useKeenSlider } from "keen-slider/react"
import Layout from "../layouts/single"
import SEO from "../components/seo"
import "keen-slider/keen-slider.min.css"

function ResumePage() {
  const data = useStaticQuery(graphql`
    query {
      travel: file(relativePath: { eq: "travel.jpg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [pause, setPause] = React.useState(false)

  const timer = useRef()

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <Layout>
      <SEO title="프론트엔드 개발자 이원민입니다." />

      <header>
        <Jumbo>
          <Title>
            프론트엔드 개발자
            <br />
            <strong>이원민</strong>입니다.
          </Title>
          <JumboImage
            fixed={data.travel.childImageSharp.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="여행 사진"
          />
        </Jumbo>
        <p>
          현재 스마일게이트 스토브에서 5년넘게 재직하고 있습니다. 기술의 변화를
          받아들이는데 거부감이 없으며 맡은 업무에 대해서는 책임감을 갖고 최선을
          다하며 기획, 디자인, 개발업무에서 겪는 반복 문제들을 목격하면 그냥
          지나치지 않고 해결하려고 노력합니다. 현재{" "}
          <strong>제 팀에서 컴포넌트 단위로 UI를 설계하고 개발하는 일</strong>을
          하고 있으며 기본적으로 웹접근성, 웹표준을 준수하려 애씁니다.
        </p>
        <h2>저는...</h2>
        <SliderContainer>
          <Slider ref={sliderRef} className="keen-slider">
            <SliderItem className="keen-slider__slide">
              <Card>
                컴포넌트 단위로 UI를 설계하고 화면을 구성하는 것이 즐겁습니다.
              </Card>
            </SliderItem>
            <SliderItem className="keen-slider__slide">
              <Card>
                프로모션 및 랜딩페이지의 인터렉션을 구사하는 일이 즐겁습니다.
              </Card>
            </SliderItem>
            <SliderItem className="keen-slider__slide">
              <Card>적은 코스트로 많은 효과를 내는 것을 고민합니다.</Card>
            </SliderItem>
            <SliderItem className="keen-slider__slide">
              <Card>
                PC, 모바일, 반응형웹 리뉴얼/구축/운영 경험이 많습니다.
              </Card>
            </SliderItem>
            <SliderItem className="keen-slider__slide">
              <Card>
                웹뷰연동 관련 예기치 않는 문제들을 만나 해결한 노하우를 갖고
                있습니다.
              </Card>
            </SliderItem>
          </Slider>
        </SliderContainer>
      </header>

      <section>
        <h2>경력사항</h2>
        <ul>
          <li>스마일게이트 스토브</li>
          <li>엔씨소프트</li>
          <li>인코어드테크놀로지</li>
          <li>스마일게이트 인터넷</li>
          <li>프리챌</li>
          <li>미디어포스</li>
          <li>바른손엔터테인먼트</li>
        </ul>
        <details>
          <summary>경력사항 자세히 보기</summary>
        </details>
      </section>

      <section>
        <h2>기술경험</h2>
      </section>

      <section>
        <h2>경력활동</h2>
        <ul>
          {/* http://158.199.130.218/gallery/ */}
          <li>CSS Nite in Seoul, Vol. 1 사진스탭</li>
          {/* https://www.etnews.com/200806190202?m=1 */}
          {/* https://hyeonseok.com/soojung/event/2008/06/18/464.html */}
          <li>
            CDK 웹표준 경진대회 <strong>은상</strong>
          </li>
          <li>
            <abbr title="하드코딩을 하는 사람들">하코사</abbr> 강남지역{" "}
            <abbr title="Clearboth">스터디</abbr> 활동
          </li>
          <li>
            태장고등학교 홈페이지 경진대회 <strong>대상</strong>
          </li>
          <li>정보처리기능사</li>
          <li>컴퓨터그래픽스 운용기능사</li>
        </ul>
      </section>

      <section>
        <h2>연락하기</h2>
      </section>
    </Layout>
  )
}

export default ResumePage

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3.4rem;
  line-height: 1.2;
`

const Jumbo = styled.div`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  ${Title} {
    flex: 1;
  }
`

const JumboImage = styled(Image)`
  border-radius: 1rem;
  border: 4px solid #000;
  box-shadow: 4px 4px 0 0 #232dff;
`

const SliderContainer = styled.div`
  border: 4px solid #000;
  box-shadow: 4px 4px 0 0 #232dff;
  border-radius: 1rem;
  transition: all 0.2s;
  &:hover {
    border-style: dotted;
    box-shadow: 2px 2px 0 6px #232dff;
  }
`

const Slider = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const SliderItem = styled.li`
  padding: 0 1rem;
`

const Card = styled.div`
  display: flex;
  padding: 1rem 0;
  height: 14rem;
  font-size: 2.4rem;
  word-break: keep-all;
  align-items: center;
  justify-content: center;
  text-align: center;
`
