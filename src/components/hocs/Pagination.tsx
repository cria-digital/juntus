import Input from "components/common/Input";
import Loading from "components/common/Loading";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IconContext } from "react-icons/lib";

export default function Pagination(props: any) {
  const [pageIndex, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(props.items);
  const { search = true, containerProps = {}, customFilters = [] } = props;

  useEffect(() => {
    const results = [];

    for (let item of props.items) {
      if (
        Object.values(item).filter((i) => {
          return i.toString().toLowerCase().includes(filterValue.toLowerCase());
        }).length
      )
        results.push(item);
    }

    setFilteredItems(results);
  }, [filterValue, props.items]);

  useEffect(() => {
    console.log("TESTE");
    if (props.customFilterFunction) {
      props.customFilterFunction(setFilteredItems, props.items);
      return;
    }
  }, customFilters);

  if (!props.items.length) return <Loading />;

  const dividedItems = filteredItems
    .map((_: any, index: number) => {
      if (index % props.limit === 0) {
        return props.items.slice(index, index + props.limit);
      }
    })
    .filter((item: any) => !!item);

  console.log(dividedItems);

  const pagesArray = dividedItems
    .map((items, index) => {
      if (items) return index;
    })
    .filter((i) => i !== undefined);

  console.log(pagesArray);

  const handleDownload = () => {};

  //

  const { Component } = props;

  return (
    <div className="pagination">
      {search && (
        <div
          className="flex"
          style={{
            width: "fit-content",
            justifyContent: "flex-end",
            marginLeft: "auto",
            gap: 50,
            alignItems: "center",
            marginRight: "5%",
          }}
        >
          {props.download && (
            <div
              onClick={handleDownload}
              style={{ height: 20, cursor: "pointer" }}
            >
              <IconContext.Provider
                value={{ size: "25", color: "var(--JuntUs-Blue)" }}
              >
                <FiDownload />
              </IconContext.Provider>
            </div>
          )}
          <div style={{ width: "350px", marginLeft: "auto" }}>
            <Input
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
              type="search"
              name="page"
              placeholder="Busque por origem, veículo, carroceria..."
            />
          </div>
        </div>
      )}
      {filteredItems.length > 0 ? (
        <>
          <div {...containerProps}>
            {dividedItems[pageIndex - 1] &&
              dividedItems[pageIndex - 1].map((item: any) => {
                const filterFunction = () => {
                  return Object.values(item).filter((i) => {
                    return i
                      .toString()
                      .toLowerCase()
                      .includes(filterValue.toLowerCase());
                  }).length;
                };

                if (filterFunction())
                  return (
                    <Component key={item.id} {...item} {...props.itemProps} />
                  );
                return null;
              })}
          </div>

          <div className="pagination-buttons">
            <button
              disabled={pageIndex === 1}
              onClick={() => setPage((state) => state - 1)}
            >
              {"<"}
            </button>
            {pagesArray.map((page: number) => {
              return (
                <button
                  disabled={pageIndex === page + 1}
                  key={page}
                  onClick={() => setPage(page + 1)}
                  className={page + 1 === pageIndex ? "active" : ""}
                >
                  {page + 1}
                </button>
              );
            })}
            <button
              disabled={pageIndex === Math.max(...pagesArray) + 1}
              onClick={() => setPage((state) => state + 1)}
            >
              {">"}
            </button>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <p>Nenhum resultado encontrado...</p>
        </div>
      )}
    </div>
  );
}
