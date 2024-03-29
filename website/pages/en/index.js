/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = '' } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = props => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = props => (
            <div className="projectLogo">
                <img
                    alt="Project Logo"
                    src={props.img_src}
                />
            </div>
        );

        const ProjectTitle = () => (
            <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
            </h2>
        );

        const PromoSection = props => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = props => (
            <div className="pluginWrapper buttonWrapper">
                <a
                    className="button"
                    href={props.href}
                    target={props.target}
                >
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo img_src={`${baseUrl}img/docusaurus.svg`} />
                <div className="inner">
                    <ProjectTitle siteConfig={siteConfig} />
                    <PromoSection>
                        <Button href={docUrl('theme.html')}>Getting started</Button>
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = '' } = this.props;
        const { baseUrl } = siteConfig;

        const Block = props => (
            <Container
                background={props.background}
                id={props.id}
                padding={['bottom', 'top']}
            >
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const FeatureCallout = () => (
            <div
                className="productShowcaseSection paddingBottom"
                style={{ textAlign: 'center' }}
            >
                <h2>Feature Callout</h2>
                <MarkdownBlock>These are features of this project</MarkdownBlock>
            </div>
        );

        const TryOut = () => (
            <Block id="try">
                {[
                    {
                        content: 'Talk about trying this out',
                        image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'left',
                        title: 'Try it Out',
                    },
                ]}
            </Block>
        );

        const Description = () => (
            <Block background="dark">
                {[
                    {
                        content:
              'This is another description of how this project is useful',
                        image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'right',
                        title: 'Description',
                    },
                ]}
            </Block>
        );

        const LearnHow = () => (
            <Block background="light">
                {[
                    {
                        content: 'Talk about learning how to use this',
                        image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'right',
                        title: 'Learn How',
                    },
                ]}
            </Block>
        );

        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        content: 'The only native dependency is react-native-vector-icons',
                        image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Almost pure JavaScript',
                    },
                    {
                        content: 'A Theme provider is all you need to begin',
                        image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Easy to use',
                    },
                    {
                        content: 'You can set custom styles of everything',
                        image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Customizable',
                    },
                    {
                        content: 'just a few lines of code',
                        image: `${baseUrl}img/docusaurus.svg`,
                        imageAlign: 'top',
                        title: 'Lightweight',
                    },
                ]}
            </Block>
        );

        const Showcase = () => {
            if ((siteConfig.users || []).length === 0) {
                return null;
            }

            const showcase = siteConfig.users
                .filter(user => user.pinned)
                .map(user => (
                    <a
                        key={user.infoLink}
                        href={user.infoLink}
                    >
                        <img
                            alt={user.caption}
                            src={user.image}
                            title={user.caption}
                        />
                    </a>
                ));

            const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

            return (
                <div className="productShowcaseSection paddingBottom">
                    <h2>Who is Using This?</h2>
                    <p>This project is used by all these people</p>
                    <div className="logos">{showcase}</div>
                    <div className="more-users">
                        <a
                            className="button"
                            href={pageUrl('users.html')}
                        >
              More
                            {' '}
                            {siteConfig.title}
                            {' '}
Users
                        </a>
                    </div>
                </div>
            );
        };

        return (
            <div>
                <HomeSplash
                    language={language}
                    siteConfig={siteConfig}
                />
                <div className="mainContainer">
                    <Features />
                    <FeatureCallout />
                    <LearnHow />
                    <TryOut />
                    <Description />
                    <Showcase />
                </div>
            </div>
        );
    }
}

module.exports = Index;
