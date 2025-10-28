import Link from "next/link";

export default function Home() {
  return (
    <main className="main-bio">
      <div className="rounded-square" id="top-target">
        <h1 className="mptext">tyler kim</h1>
        <p className="desctext" style={{ marginBottom: "30px" }}>
          <span style={{ color: "rgb(137, 193, 114)" }}>cal poly slo</span> -
          B.S. in CompSci
        </p>
        <ul className="hplist" style={{ marginBottom: "30px" }}>
          <li className="btext">
            <a href="#friend-target" id="scroll-friend">
              friend
            </a>
          </li>
          <li className="btext">
            <a href="#music-target" id="scroll-musicphile">
              musicphile
            </a>
          </li>
          <li className="btext">
            <a href="#human-target" id="scroll-human">
              bio
            </a>
          </li>
        </ul>
      </div>

      <div id="friend-target" className="rounded-square">
        <div className="scrollable-container">
          <table>
            <tbody>
              <tr>
                <td>
                  <img src="/img1.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img2.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img3.jpg" className="contained-image" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/img4.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img5.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img6.jpg" className="contained-image" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/img7.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img8.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img9.jpg" className="contained-image" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/img10.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img11.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img12.jpg" className="contained-image" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/img13.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img14.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img15.jpg" className="contained-image" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/img16.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img17.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img18.jpg" className="contained-image" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/img19.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img20.jpg" className="contained-image" />
                </td>
                <td>
                  <img src="/img21.jpg" className="contained-image" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="music-target" className="rounded-square">
        <p className="desctext">
          <a
            href="https://open.spotify.com/playlist/6BclU8VJZJP6GSu3PSD6uc?si=6e9e3736eb7a42e5"
            className="desctext"
          >
            my current playlist:
          </a>
        </p>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/6BclU8VJZJP6GSu3PSD6uc?utm_source=generator"
          width="80%"
          height="352"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      <div id="human-target" className="rounded-square">
        <p className="desctext">i'm a work in progress...</p>
      </div>
    </main>
  );
}
