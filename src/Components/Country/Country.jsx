const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="bg-slate-900 m-3 p-3 rounded-md flex flex-col justify-center text-center">
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2 className="text-2xl font-bold text-white pt-3">
        {country.name.common}
      </h2>
    </div>
  );
};

export default Country;
