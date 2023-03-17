import BootrapPagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.css";

export function Pagination(props) {
  let { active, baseUrl } = props;
  const navigate = useNavigate();
  if (!active) {
    active = 1;
  }

  const onPageClick = page => {
    navigate(`${baseUrl}?page=${page}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <BootrapPagination className={styles.pagination}>
        {[1, 2, 3, 4, 5].map(page => (
          <BootrapPagination.Item
            key={page}
            active={page === Number(active)}
            onClick={() => onPageClick(page)}
          >
            {page}
          </BootrapPagination.Item>
        ))}
      </BootrapPagination>
    </div>
  );
}
