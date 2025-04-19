import PageNavbar from './navbar';
import PageHome from './home';
import PageAbout from './about';
import PageService from './services';
import PageProjects from './projects';
import PageTestimonial from './testimonials';
import PageFooter from './footer';

export default function MainContent() {
  return (
    <>
      <div className="p-6">
        <PageNavbar />
        <PageHome />
        <PageAbout />
        <PageService />
        <PageProjects />
        <PageTestimonial />
      </div>
      <PageFooter />
    </>
  );
}