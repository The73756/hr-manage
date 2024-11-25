export const EmployeeInfo = () => {
  return (
    <div className="flex justify-between mb-32">
      <h1 className="font-semibold text-3xl text-blue">Иванов Иван Иванович</h1>
      <div className="items-center gap-x-5 gap-y-2 grid grid-cols-2 w-[420px] text-blue-light">
        <p>Электронная почта</p>
        <p className="font-bold text-xl">i@mail.ru</p>
        <p>Телефон</p>
        <p className="font-bold text-xl">+7 999 999 99 99</p>
        <p>Ставка (руб./час)</p>
        <p className="font-bold text-xl">700</p>
      </div>
    </div>
  );
};
