import favicon from "../public/favicon.ico";

export default function Favicon() {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href={favicon.src} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon.src} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon.src} />
    </>
  );
}
