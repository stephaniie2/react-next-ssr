import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p>Text</p>
  </Layout>
);

export default withRouter(Post);
