import { brandActions } from "lib/redux/brand.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useBrand = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(brandActions.getByBrand(id));
  }, [dispatch, id]);
  const { brand } = useSelector((state) => state.brand);
  return brand;
};

export default useBrand;
