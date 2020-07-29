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
          fluid(maxWidth: 140, maxHeight: 140) {
            ...GatsbyImageSharpFluid
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
            fluid={data.travel.childImageSharp.fluid}
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
      </header>

      <main>
        <Section>
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
        </Section>

        <Section>
          <h2>경력사항</h2>

          <Details>
            <Summary>
              스마일게이트 스토브{` `}
              <Badge>2015년 &middot; 5년 5개월 재직중</Badge>
            </Summary>
            <DetailsContent>
              <BadgeList role="list">
                <Badge role="listitem">HTML</Badge>
                <Badge role="listitem">CSS</Badge>
                <Badge role="listitem">Vue</Badge>
                <Badge role="listitem">TypeScript</Badge>
                <Badge role="listitem">Atomic Design</Badge>
                <Badge role="listitem">Storybook</Badge>
                <Badge role="listitem">Webpack</Badge>
                <Badge role="listitem">Gulp</Badge>
                <Badge role="listitem">Nunjucks</Badge>
                <Badge role="listitem">Bootstrap</Badge>
                <Badge role="listitem">SASS</Badge>
                <Badge role="listitem">LESS</Badge>
                <Badge role="listitem">
                  크로스브라우징 &middot; 웹표준 &middot; 웹접근성
                </Badge>
              </BadgeList>
              <ul>
                <li>
                  <strong>가칭 길드 커뮤니티</strong>
                  <ul>
                    <li>
                      CDD 방식 Vue + TypeScript 환경에서 Storybook 이용한
                      컴포넌트 개발
                    </li>
                    <li>Vue Emoji Picker 컴포넌트 개발</li>
                    <li>
                      서비스 요구사항에 적합한 Scrollbar, Range Slider, Markdown
                      Preview 라이브러리 조사 및 R&D
                    </li>
                    <li>
                      Storybook 선행 도입이후 진행 상황과 장단점들을 유관부서에
                      전파 및 공유
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>툰스푼 모바일</strong>
                  <ul>
                    <li>
                      페이지 로딩 속도 개선을 위한 Image Lazy Loading 컴포넌트
                      개발 및 적용
                    </li>
                    <li>
                      분업화된 업무 환경에서 Vue 컴포넌트를 직접 운영하여
                      웹접근성, 코드품질 개선
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>동적템플릿 TF</strong> 한가지의 HTML 구조로 다양한
                  레이아웃 타입을 구현하는 방안들을 연구
                </li>
                <li>
                  <strong>공통 GNB</strong> 사내에서 사용하고 외부에
                  제공해야하는 B2B 서비스로 Webpack 으로 구성한 프로젝트에 GNB
                  마크업 운영 및 버전관리, 업데이트 기록 후 전파
                </li>
                <li>
                  <strong>사내 디자인 시스템</strong> 가이드라인을 nuxt.js를
                  이용하여 구축
                </li>
                <li>
                  <strong>사내 마크업 가이드</strong> vuepress 를 이용하여 사내
                  마크업 가이드 구축
                </li>
                <li>
                  <strong>마크업</strong>
                  <ul>
                    <li>
                      다양한 디바이스의 웹뷰와 연동하는 과정에서 많은 문제들을
                      경험하고 해결해온 경험과 노하우 축적
                    </li>
                    <li>주요 게임의 인터렉션, PC, 모바일, 반응형웹 마크업</li>
                    <li>흩어진 약관을 한 곳에서 관리하여 업무효율화 개선</li>
                    <li>젠데스크 솔루션 테마를 커스텀하여 2년이상 운영 경험</li>
                    <li>메가포트, 스토브 전반 서비스 구축 및 운영</li>
                  </ul>
                </li>
              </ul>
            </DetailsContent>
          </Details>

          <Details>
            <Summary>
              인코어드테크놀로지{` `}
              <Badge>2013년 &middot; 6개월</Badge>
            </Summary>
            <DetailsContent>
              <BadgeList role="list">
                <Badge role="listitem">HTML</Badge>
                <Badge role="listitem">CSS</Badge>
                <Badge role="listitem">Angular</Badge>
                <Badge role="listitem">JavaScript</Badge>
                <Badge role="listitem">jQuery</Badge>
                <Badge role="listitem">
                  크로스브라우징 &middot; 웹표준 &middot; 웹접근성
                </Badge>
              </BadgeList>
              <ul>
                <li>
                  <strong>에너지 대시보드</strong> 마크업을 할줄알고 UI를
                  미려하게 표현할 수 있는 업무 강점을 내세워 차트의 디자인을
                  커스텀하는 일을 담당하였으며 Bootstrap 으로 대시보드
                  구상/설계를 담당하였습니다. 또한, 폼요소의 유효성 검사를
                  다루고 사용자를 관리할 수 있는 영역을 담당하였습니다.
                </li>
                <li>
                  <strong>에너지 월간리포트</strong> 커스텀한 차트를 이미지로
                  저장하고 고객에게 이메일로 전송할 수 있는 기능중에 메일링
                  하드코딩을 담당하였습니다. 국내사용자가 많은 다음, 네이버에
                  최대한 이미지를 사용하지 않는 선에서 크로스브라우징을
                  고민하였습니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>

          <Details>
            <Summary>
              스마일게이트 인터넷{` `}
              <Badge>2011년 &middot; 2년 2개월</Badge>
            </Summary>
            <DetailsContent>
              <BadgeList role="list">
                <Badge role="listitem">HTML</Badge>
                <Badge role="listitem">CSS</Badge>
                <Badge role="listitem">JavaScript</Badge>
                <Badge role="listitem">jQuery</Badge>
                <Badge role="listitem">SVN</Badge>
                <Badge role="listitem">
                  크로스브라우징 &middot; 웹표준 &middot; 웹접근성
                </Badge>
              </BadgeList>
              <ul>
                <li>
                  <strong>DK온라인, 이지투온, 멤버십</strong> 게시판이 들어간
                  게임웹사이트를 구축하고 CBT, OBT 시기에 맞춰 리뉴얼 하였으며
                  리텐션을 끌어올리기 위해 프로모션 이벤트 페이지를 빨리
                  만들어져야 하는 점에 공감하여 기본 포멧을 재사용하여 4일
                  걸리는 일정에서 1일만에 1가지의 프로모션 페이지가 마크업될 수
                  있도록 노력하였습니다.
                </li>
                <li>
                  <strong>jQuery 플러그인 제작</strong> 드롭다운 라이브러리를
                  제작하여 재사용을 하였고, jQuery Tmpl을 이용하여 마크업된
                  GNB에 데이터를 바인딩하여 운영한 경험이 있습니다. 그 밖에
                  회원가입 폼 유효성 검사, 디자인 된 Alert 등등 재사용할만한
                  요소들을 jQuery 플러그인으로 개발하여 활용하였습니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>

          <Details>
            <Summary>
              프리챌{` `}
              <Badge>2010년 &middot; 8개월</Badge>
            </Summary>
            <DetailsContent>
              <BadgeList role="list">
                <Badge role="listitem">HTML</Badge>
                <Badge role="listitem">CSS</Badge>
                <Badge role="listitem">JavaScript</Badge>
                <Badge role="listitem">jQuery</Badge>
                <Badge role="listitem">
                  크로스브라우징 &middot; 웹표준 &middot; 웹접근성
                </Badge>
              </BadgeList>
              <p>
                IE6 크로스브라우징에 웹접근성과 웹표준을 준수하여 메인, 게임,
                커뮤니티, 회원 등 주요 서비스들을 모두 리뉴얼하였습니다.
              </p>
            </DetailsContent>
          </Details>

          <Details>
            <Summary>
              미디어포스{` `}
              <Badge>2008년 &middot; 2년</Badge>
            </Summary>
            <DetailsContent>
              <BadgeList role="list">
                <Badge role="listitem">HTML</Badge>
                <Badge role="listitem">CSS</Badge>
                <Badge role="listitem">
                  크로스브라우징 &middot; 웹표준 &middot; 웹접근성
                </Badge>
              </BadgeList>
              <ul>
                <li>
                  <strong>하나포스 - SK브로드밴드 리뉴얼</strong> 하나포스와 SK
                  계열사로 합병하면서 2주 내에 리뉴얼을 진행해야 했습니다.
                  수천개의 이미지를 포토샵 액션기능을 활용하여 오렌지색 톤으로
                  일괄 변경하고 문구를 SK 브로드밴드로 매크로를 이용하여
                  변경하여 일정을 준수하려 노력하였습니다.
                </li>
                <li>
                  <strong>Tworld 파견</strong> 신입 때 약 1년 8개월간 핵심
                  영역을 유지보수/운영 담당하였습니다.
                </li>
                <li>
                  <strong>넥슨 워락</strong> 본사에서 넥슨 워락 메인을 3일 내에
                  리뉴얼하는 일을 담당하였습니다.
                </li>
                <li>
                  <strong>네이트온 하루</strong> 세상에 빛을 보지 못했지만 긴급
                  투입되어 약 1개월간 운영을 담당하였습니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>

          <Details>
            <Summary>기타경력{` `}</Summary>
            <DetailsContent>
              <ul>
                <li>
                  엔씨소프트<Badge>계약직</Badge>
                </li>
                <li>
                  웹젠<Badge>계약직</Badge>
                </li>
                <li>
                  아큐파이 <Badge>스타트업</Badge>
                </li>
                <li>
                  그래피티{` `}
                  <Badge>웹에이전시</Badge>
                </li>
                <li>
                  바른손엔터테인먼트 <Badge>웹디자이너</Badge>
                </li>
              </ul>
              <p>
                대학 졸업 후 2007년 바른손엔터테인먼트 신입웹디자이너로 입사 후
                하드코딩에 적성에 맞아 웹퍼블리셔로 전향하기로 마음먹었으며 이후
                웹표준 스터디, 세미나 스탭 활동, 대회 참여, 업계 선배님들에게
                많은 가르침과 조언을 받아 웹에이전시 그래피티, 미디어포스에서
                웹퍼블리셔로 일을 시작하게 되었습니다.
              </p>
              <p>
                그 과정에서 더 새롭고, 더 성장할 수 있는 일을 찾기 위해 모험을
                하다 자연스럽게 어려운 경제상황과 맞물리면서 계약직 &middot;
                파견직을 병행하였습니다.
              </p>
            </DetailsContent>
          </Details>
        </Section>

        <Section>
          <h2>기술경험</h2>
          <Details>
            <Summary>
              HTML/CSS <Badge>상</Badge>
            </Summary>
            <DetailsContent>
              <ul>
                <li>
                  디자인 중심이 아닌, 사용자 중심에서 웹접근성을 고민합니다.
                  사용자가 특수한 상황에서 HTML 콘텐츠를 접했을때 이해하기
                  쉽도록 부가 설명을 수록하는 등 소소한 노력을 해왔습니다.
                </li>
                <li>
                  기본적으로 웹표준/웹접근성을 준수하려고 노력합니다. 컴포넌트
                  주도 개발 시 구조, 표현, 동작 분리 원칙을 적용하는 것을
                  고려하면서 의미있는 태그들을 선택하여 사용하려고 노력합니다.
                </li>
                <li>
                  과거의 IE6 크로스브라우징에 대한 경험을 많이 보유하고 있으며,
                  브라우저 버전별로 지원하기 위해 CSS Hack을 잘 사용할 수 있는
                  노하우를 갖고 있습니다.
                </li>
                <li>
                  과거의 SMACSS 방법론 현재의 BEM 및 OOCSS 방법론의 차이를
                  이해하고 있습니다. 현재는 프로젝트 상황에 맞게 방법론을 섞어서
                  사용합니다. 토이프로젝트에서는 OOCSS 방법론을 선호합니다.
                </li>
                <li>
                  축적된 노하우와 좋은 솔루션으로 더 빠르게 마크업할 수
                  있습니다. 웹표준/웹접근성 준수는 덤입니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>
          <Details>
            <Summary>
              Git <Badge>중상</Badge>
            </Summary>
            <DetailsContent>
              <ul>
                <li>터미널을 이용하여 능숙하게 Git 버전 관리를 합니다.</li>
                <li>
                  원활한 협업을 위해 커밋을 어떻게 해야하는지 이해하고 있으며
                  팀내에서 1년 넘게 코드리뷰를 진행하고 있습니다.
                </li>
                <li>
                  커밋로그를 최대한 더럽히지 않으려고 하며 컨벤션을 잘 따릅니다.
                </li>
                <li>
                  한가지의 레거시가 여러가지로 쪼개지면서 누적된 기술 부채들을
                  다시 병합하는 대형 작업을 진행해본 경험이 있습니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>
          <Details>
            <Summary>
              Vue <Badge>중</Badge>
            </Summary>
            <DetailsContent>
              <ul>
                <li>
                  Vue Emoji Picker 컴포넌트를 개발하면서 대용량 데이터를
                  처리하는 Virtual Scroll 기법, Lazy Loading 기법을 적용하는
                  방법을 공부하였습니다.
                </li>
                <li>
                  툰스푼 프로젝트에 Lazy Image Loading 컴포넌트를 개발하여
                  상용에 적용하여 페이지 로딩 속도에 기여하였습니다.
                </li>
                <li>
                  Vue - TypeScript - Storybook의 궁합이 잘 맞지 않는 다는 점을
                  React 와 함께 공부하면서 느낀 점이 많습니다. 이상한 난관들과
                  많은 문제점들을 해결해왔으며 지금은 잘 사용하고 있습니다.
                </li>
                <li>
                  토이프로젝트에서는 상태관리 Vuex 스토어에 사용방법을 이해하고
                  있으며 개발자 도구를 활용하여 문제를 해결하는 방법까지
                  숙지하고 있습니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>
          <Details>
            <Summary>
              React <Badge>하</Badge>
            </Summary>
            <DetailsContent>
              <p>
                회사에서 React를 경험해볼 수 있는 기회가 없어 토이프로젝트를
                하고 있습니다. 첫번째는 회사 업무 요구사항의 일부를 React로
                구현해보는 작업, 두번째는 Gatsby로 개인블로그를 만드는 것.
                세번째는 CDD 방식으로 회원가입 페이지를 개발하는 일입니다.
              </p>
              <ul>
                <li>
                  컴포넌트 주도 개발을 위해 <code>styled-components</code> 를
                  사용해본 경험이 있습니다. next.js 가 제공하는{" "}
                  <code>styled-jsx</code> 도 사용하는데 거부감이 없습니다.
                </li>
                <li>
                  프로젝트의 요구사항에 맞게 서버사이드렌더링, 정적 사이트
                  생성기들의 장단점을 비교하고 선택할 수 있으며 Next.js, Gatsby
                  의 차이점을 이해하고 있습니다.
                </li>
                <li>
                  스토리북과 연동하여 회원가입 페이지를 구성하고 이후에{" "}
                  <code>styled-components</code> 라이브러리를 이용하여 CSS-in-JS
                  방식으로 코드를 리팩토링하는 공부를 하였습니다.
                </li>
                <li>
                  리액트의 생명주기, 함수 방식, 클래스 방식의 차이점이나 Hook을
                  사용해본 경험이 많지 않으나 토이프로젝트를 진행하면서 최소한의
                  사용법을 조금씩 숙지하여 경험하고 있습니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>
          <Details>
            <Summary>기타</Summary>
            <DetailsContent>
              <ul>
                <li>
                  <strong>TypeScript</strong> 처음 다룰 때 타입 정의를 하는데
                  많은 시간을 잡아먹었습니다. 불필요한 시간을 줄이기 위해
                  타입스크립트의 기본기를 학습할 계획이며 TypeScript 적용 시
                  프로젝트에 좋은 영향을 끼치는지 몸소 체감하고 있습니다.
                </li>
              </ul>
            </DetailsContent>
          </Details>
        </Section>

        <Section>
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
        </Section>
      </main>
    </Layout>
  )
}

export default ResumePage

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3.4rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
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
  width: 140px;
  height: 140px;
  border-radius: 1rem;
  border: 4px solid #000;
  box-shadow: 4px 4px 0 0 #232dff;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-width: 2px;
  }
`

const Section = styled.section`
  margin: 4rem 0;
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

  @media (max-width: 768px) {
    height: 10rem;
    font-size: 1.6rem;
  }
`

const BadgeList = styled.div`
  margin: 0 -4px;
`

const Badge = styled.span`
  margin: 0 4px;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: #eee;
  color: #333;
`

const Details = styled.details`
  margin: 1.2rem 0;
  display: block;
  position: relative;
  ::before {
    content: "";
    height: 100%;
    left: 0.22rem;
    position: absolute;
    top: 2rem;
    height: calc(100% - 2rem);
    border-left: 1px solid #ddd;
  }
`

const DetailsContent = styled.div`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
  ul {
    padding-left: 1.6rem;
    li {
      margin: 0.6rem 0;
      :last-of-type {
        margin-bottom: 0;
      }
      li {
        margin: 0.4rem 0;
      }
    }
  }
`

const Summary = styled.summary`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 1.2rem;
  outline: 0;
  line-height: 1;
  cursor: pointer;
  ::-webkit-details-marker {
    display: none;
  }
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 6px;
    height: 6px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    transform: translateY(-50%) rotate(135deg);
    transition: transform 300ms ease;
  }
  ${Details}[open] &::before {
    transform: translateY(-50%) rotate(225deg);
  }
`
