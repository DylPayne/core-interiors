export default function HeaderSection(props) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="pt-10 pb-10 sm:pt-10 sm:pb-10 lg:pt-10 lg:pb-20 flex justify-center items-center flex-col">
        <h1 className="font-serif font-bold text-3xl">{props.title}</h1>
        <h1 className="text-maroon uppercase font-semibold tracking-wide">
          {props.subtitle}
        </h1>
      </div>
    </div>
  );
}
