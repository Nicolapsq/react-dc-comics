import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

export default function app() {
  return <>
      <Header></Header>
      <Alert text="" colorText="" bgColor=""></Alert>
      <Main></Main>
      <Footer></Footer>
  </>;
}