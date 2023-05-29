export default function Home() {
  const fetchImage = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    return images[0];
  };

  return <div>猫画像予定地</div>;
}
