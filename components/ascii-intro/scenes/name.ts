// CanvasTextSampler — renders a wordmark into the grid canvas and samples it
// into NORMALIZED ASCII points. Solid interior uses a dense glyph; antialiased
// edges fall through to the luminance ramp, giving the wordmark soft borders.
//
// This is the FALLBACK name source. The intro normally asciifies the SHIVAM
// logo image (see NAME_URL / imagePoints in main.js); this only runs if that
// image fails to load.

export function namePoints(engine, text = "SHIVAM") {
  const { cols, rows } = engine;
  const canvas = engine.createCanvas();
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  const targetWidth = cols * 0.86;
  let fontSize = Math.floor(rows * 0.5);
  const setFont = (size) => {
    ctx.font = `900 ${size}px "Arial Black", Arial, sans-serif`;
  };

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  setFont(fontSize);
  while (ctx.measureText(text).width > targetWidth && fontSize > 4) {
    fontSize -= 1;
    setFont(fontSize);
  }

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, cols, rows);
  ctx.fillStyle = "#fff";
  ctx.fillText(text, cols / 2, rows / 2, targetWidth);

  return engine.createFromCanvas(canvas, {
    context: "name",
    threshold: 0.16,
    solidGlyph: ">",
    solidAbove: 0.7,
  });
}
