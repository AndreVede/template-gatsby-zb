import * as React from 'react';
import Header from '../components/Header';
import { GlobalStyle, flexCenter } from '../style-utils/styles-variables';
import Footer from '../components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeDefault } from '../style-utils/Themes';
import { useStaticQuery, graphql, PageProps } from 'gatsby';

interface LayoutProps {
    location?: PageProps['location'];
    children?: React.ReactNode;
}

const Main = styled.main`
    margin-top: 50px;
    ${flexCenter('column', 'flex-start')}
    gap: 10px;
`;

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        link
                        name
                    }
                }
            }
        }
    `);
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={ThemeDefault}>
                <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
                <Main>{children}</Main>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Layout;
