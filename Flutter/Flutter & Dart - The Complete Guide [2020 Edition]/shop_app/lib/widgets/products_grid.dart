import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../providers/products_provider.dart';
import '../widgets/product_item.dart';

class ProductsGrid extends StatelessWidget {
  final bool showFavs;

  ProductsGrid(this.showFavs);

  @override
  Widget build(BuildContext context) {
    final productsData = Provider.of<Products>(context);
    final products = showFavs ? productsData.favoriteItems : productsData.items;

    return GridView.builder(
      padding: const EdgeInsets.all(
        10,
      ),
      itemCount: products.length,
      itemBuilder: (ctx, ind) => ChangeNotifierProvider.value(
        // create: (c) => products[ind], // #1, of course you use just ChangeNotifierProvider(create:...),
        value: products[
            ind], //alternative to #1 // With .builder you should use the first approch.
        child: ProductItem(
            // products[ind].id,
            // products[ind].title,
            // products[ind].imageUrl,
            ),
      ),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 3 / 2,
        crossAxisSpacing: 10,
        mainAxisSpacing: 10,
      ),
    );
  }
}
