import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../components/Layout";

export default class About extends React.Component {
  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/reedbarger");
    const data = await res.json();
    return { user: data };
  }

  render() {
    const { user } = this.props;
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height="200px" />
      </Layout>
    );
  }
}
