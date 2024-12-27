import { createBrowserRouter } from "react-router-dom";
import LayoutEight from "../components/layout/LayoutEight.jsx";
import LayoutFive from "../components/layout/LayoutFive.jsx";
import LayoutFour from "../components/layout/LayoutFour.jsx";
import LayoutOne from "../components/layout/LayoutOne.jsx";
import LayoutSeven from "../components/layout/LayoutSeven.jsx";
import LayoutSix from "../components/layout/LayoutSix.jsx";
import LayoutThree from "../components/layout/LayoutThree.jsx";
import LayoutTwo from "../components/layout/LayoutTwo.jsx";
import Layout from "../components/layout/index.jsx";
import ErrorPage from "../error-page";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";
import Pricing from "../page/Pricing";
import Reset from "../page/auth/ResetPassword.jsx";
import SignIn from "../page/auth/SignIn";
import SignUp from "../page/auth/SignUp";
import BlogGridPage from "../page/blog/BlogGridPage.jsx";
import BlogPage from "../page/blog/BlogPage.jsx";
import SingleBlogPage from "../page/blog/SingleBlog.jsx";
import HomeFive from "../page/home/HomeFive.jsx";
import HomeFour from "../page/home/HomeFour.jsx";
import HomeOne from "../page/home/HomeOne.jsx";
import HomeSeven from "../page/home/HomeSeven.jsx";
import HomeSix from "../page/home/HomeSix.jsx";
import HomeThree from "../page/home/HomeThree.jsx";
import HomeTwo from "../page/home/HomeTwo.jsx";
import PortfolioOneColumn from "../page/portfolio/PortfolioOneColoum";
import PortfolioTwoColumn from "../page/portfolio/PortfolioTwoColumn";
import SinglePortfolio from "../page/portfolio/SinglePortfolio";
import Service from "../page/service";
import SingleService from "../page/service/SingleService.jsx";
import Team from "../page/team";
import SingleTeam from "../page/team/SingleTeam.jsx";
import CommingSoon from "../page/utility/CommingSoon.jsx";
import Faq from "../page/utility/Faq.jsx";
import TestimonialPage from "../page/utility/Testimonial.jsx";

export const router = createBrowserRouter([
	{
		path: "/react-template-02/",
		element: <Layout />,
		children: [
			{
				path: "/react-template-02/",
				element: <LayoutOne />,
				children: [
					{
						path: "/react-template-02/",
						element: <HomeOne />,
					},
					{
						path: "/react-template-02/about-us",
						element: <AboutUs />,
					},
					{
						path: "/react-template-02/contact-us",
						element: <ContactUs />,
					},
					{
						path: "/react-template-02/faq",
						element: <Faq />,
					},

					{
						path: "/react-template-02/testimonial",
						element: <TestimonialPage />,
					},

					{
						path: "/react-template-02/pricing",
						element: <Pricing />,
					},
					{
						path: "/react-template-02/blog",
						element: <BlogPage />,
					},
					{
						path: "/react-template-02/single-blog",
						element: <SingleBlogPage />,
					},
					{
						path: "/react-template-02/blog-grid",
						element: <BlogGridPage />,
					},
					{
						path: "/react-template-02/service",
						element: <Service />,
					},
					{
						path: "/react-template-02/single-service",
						element: <SingleService />,
					},
					{
						path: "/react-template-02/team",
						element: <Team />,
					},
					{
						path: "/react-template-02/single-team",
						element: <SingleTeam />,
					},
					{
						path: "/react-template-02/portfolio-one",
						element: <PortfolioOneColumn />,
					},
					{
						path: "/react-template-02/portfolio-two",
						element: <PortfolioTwoColumn />,
					},
					{
						path: "/react-template-02/single-portfolio",
						element: <SinglePortfolio />,
					},
					{
						path: "*",
						element: <ErrorPage />,
					},
				],
			},
			{
				path: "/react-template-02/",
				element: <LayoutTwo />,
				children: [
					{
						path: "/react-template-02/home-two",
						element: <HomeTwo />,
					},
				],
			},
			{
				path: "/react-template-02/",
				element: <LayoutThree />,
				children: [
					{
						path: "/react-template-02/home-three",
						element: <HomeThree />,
					},
				],
			},
			{
				path: "/react-template-02/",
				element: <LayoutFour />,
				children: [
					{
						path: "/react-template-02/home-four",
						element: <HomeFour />,
					},
				],
			},
			{
				path: "/react-template-02/",
				element: <LayoutFive />,
				children: [
					{
						path: "/react-template-02/home-five",
						element: <HomeFive />,
					},
				],
			},
			{
				path: "/react-template-02/",
				element: <LayoutSix />,
				children: [
					{
						path: "/react-template-02/home-six",
						element: <HomeSix />,
					},
				],
			},
			{
				path: "/react-template-02/",
				element: <LayoutSeven />,
				children: [
					{
						path: "/react-template-02/home-seven",
						element: <HomeSeven />,
					},
				],
			},
			{
				path: "/react-template-02/",
				element: <LayoutEight />,
				children: [
					{
						path: "/react-template-02/coming-soon",
						element: <CommingSoon />,
					},
					{
						path: "/react-template-02/reset-password",
						element: <Reset />,
					},
					{
						path: "/react-template-02/sign-up",
						element: <SignUp />,
					},
					{
						path: "/react-template-02/sign-in",
						element: <SignIn />,
					},
				],
			},
		],
	},
]);
