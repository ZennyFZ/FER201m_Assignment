import Button from "@mui/material/Button";
export default function AnimeWatch() {

    return (
      <div>
        <iframe id="avideo" width="800" height="500" src="https://short.ink/FRQuYs4mz" frameborder="0" scrolling="0" allowfullscreen></iframe>
        <div style={{color: 'white'}}>Server:</div>
        <Button onClick={()=>{document.getElementById('avideo').src = 'https://short.ink/FRQuYs4mz' }}>Abyss</Button>
        <Button onClick={()=>{document.getElementById('avideo').src = 'https://www.fembed.com/v/w316kcnk1m661j8' }}>Fembeb</Button>
        <Button onClick={()=>{document.getElementById('avideo').src = 'https://www.mp4upload.com/embed-r79k3kobss5o.html' }}>M4U</Button>
        <Button onClick={()=>{document.getElementById('avideo').src = 'https://www.youtube.com/embed/VwBzIxHkBRE' }}>YTB</Button>
      </div>
    );
}