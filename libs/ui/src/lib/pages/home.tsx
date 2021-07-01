import React, { useLayoutEffect, useState } from 'react';
import { CalculatorImage, HelpImage } from '../images';
import { Card } from '../card';
import { Filter } from '../filter';
import { Head, Row, Table } from '../table';
import { Header } from '../header';
import { Tabs } from '../tabs';

export interface HomeProps {
  facade: any;
}

export function Home({ facade }: HomeProps) {
  const [openFilter, setOpenFilter] = useState(false);
  const { filtered } = facade.getState() || { filtered: [] };
  const dataTitle = {
    today: 'de hoy',
    week: 'de esta semana',
    september: 'de septiembre',
  };

  useLayoutEffect(() => {
    facade.getData(facade.getSearch());
  }, []);

  return (
    <div className="relative flex flex-col bg-colorbackground">
      <Header onClick={() => ({})}>
        <nav className="flex justify-center items-center text-white space-x-8 font-light">
          <a href="#">Mi negocio</a>
          <a href="#" className="flex">
            Ayuda <HelpImage width="15px" />
          </a>
        </nav>
      </Header>
      <main className="flex flex-col bg-colorbackground p-8">
        <div className="flex flex-row justify-between space-x-6">
          <div className="w-5/12">
            <Card title="Total de ventas de septiembre">
              <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-azul to-rojo text-4xl font-bold">
                $1'560.000
              </h4>
              <p className="text-azul text-xs">Septiembre 21</p>
            </Card>
          </div>
          <div className="w-7/12">
            <Tabs>
              <span
                data-active={facade.getSearch() === 'today'}
                onClick={() => {
                  facade.setSearch('today');
                  facade.getData('today');
                }}
              >
                Hoy
              </span>
              <span
                data-active={facade.getSearch() === 'week'}
                onClick={() => {
                  facade.setSearch('week');
                  facade.getData('week');
                }}
              >
                Esta semana
              </span>
              <span
                data-active={facade.getSearch() === 'september'}
                onClick={() => {
                  facade.setSearch('september');
                  facade.getData('september');
                }}
              >
                Septiembre
              </span>
            </Tabs>
            <span className="flex justify-end mt-4">
              <div className="w-1/2">
                <Filter open={openFilter} onClick={setOpenFilter}>
                  <div className="flex flex-col py-4">
                    <span className="text-azul flex whitespace-nowrap items-center space-x-3">
                      <input
                        type="checkbox"
                        id="datafono"
                        checked={facade.checkFilter('datafono')}
                        onChange={(e) => {
                          facade.setFilters(
                            'datafono',
                            !facade.checkFilter('datafono')
                          );
                        }}
                      />{' '}
                      <label htmlFor="datafono" className="cursor-pointer">
                        Cobro con datafono
                      </label>
                    </span>
                    <span className="text-azul flex whitespace-nowrap items-center space-x-3">
                      <input
                        type="checkbox"
                        id="link"
                        checked={facade.checkFilter('link')}
                        onChange={(e) => {
                          facade.setFilters(
                            'link',
                            !facade.checkFilter('link')
                          );
                        }}
                      />
                      <label htmlFor="link" className="cursor-pointer">
                        Cobro con link de pagos
                      </label>
                    </span>
                    <span className="text-azul flex whitespace-nowrap items-center space-x-3">
                      <input
                        type="checkbox"
                        id="all"
                        checked={facade.checkFilter('all')}
                        onChange={(e) => {
                          facade.setFilters('all', !facade.checkFilter('all'));
                        }}
                      />{' '}
                      <label htmlFor="all" className="cursor-pointer">
                        Ver todos
                      </label>
                    </span>
                    <span className="text-center w-full">
                      <button
                        className="mt-4 px-14 py-2 bg-rojo hover:opacity-20 rounded-full font-bold text-white"
                        onClick={facade.filter}
                      >
                        Aplicar
                      </button>
                    </span>
                  </div>
                </Filter>
              </div>
            </span>
          </div>
        </div>
        <div className="mt-4">
          <Table title={`Total de ventas ${dataTitle[facade.getSearch()]}`}>
            <Head>
              <div>Transacción</div>
              <div>Fecha y hora</div>
              <div>Método de pago</div>
              <div>ID transacción</div>
              <div>Bold Monto</div>
            </Head>
            {filtered.map((item: any, i) => (
              <Row index={i} key={item.id}>
                <div>
                  <span className="flex">
                    <CalculatorImage width="15px" /> {item.transaction_name}
                  </span>
                </div>
                <div>
                  <p className="whitespace-nowrap text-grisclaro">
                    {item.date}
                  </p>
                </div>
                <div>
                  <p className="whitespace-nowrap text-grisclaro">
                    {item.payment_method}
                  </p>
                </div>
                <div>
                  <p className="whitespace-nowrap text-grisclaro">
                    {item.transaction_id}
                  </p>
                </div>
                <div>
                  <span className="text-azul">{item.amount}</span>
                  <span className="text-grisclaro">Deducción Bold</span>
                  <span className="text-rojo">{item.deductions}</span>
                </div>
              </Row>
            ))}
          </Table>
        </div>
      </main>
    </div>
  );
}

export default Home;
