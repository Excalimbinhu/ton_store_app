import React from 'react';
import { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProductList } from '../../components';
import api from '../../services/api'
import { ProductsActions } from '../../store/ducks';

const productsAPI = api('products')

function Dashboard(props: any) {
    const [isLoading, setIsLoading] = React.useState(true);
    const handleisLoading = () => setIsLoading(!isLoading);
    
    useEffect(() => {
      const { setProductList } = props;

      productsAPI.get('')
      .then(res => {
        setProductList(res.data)
        handleisLoading()
      })
    }, []);

    return (
      <View>
        <ProductList/>
      </View>
    );
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(ProductsActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Dashboard);