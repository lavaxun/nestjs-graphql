import {
  Resolver,
  Query,
} from '@nestjs/graphql';
import { ProductImageDto, ProductImageResponse } from './image.input';


@Resolver(of => ProductImageDto)
export class ProductImageResolver {
  constructor(
  ) {}

  // @Mutation(returns => CustomerCartDto)
  // async addToCustomerCart(
  //     @GetUser() currentUser,
  //     @Args('input') cartItemInput: CustomerCreateCartItemInput,
  // ): Promise<CustomerCartDto> {
  //     const cart = await this.cartService.findOrCreateCartByUserId(
  //         currentUser.id,
  //     );
  //     await this.cartService.addToCart(cartItemInput, cart);

  //     // make sure we always return the latest cart
  //     // as there might be some changes at the cart concurrently
  //     return await this.cartService.findExistingCart(cart.id);
  // }


  @Query(returns => ProductImageDto)
  image(): ProductImageDto {
      return new ProductImageDto();
  }

  @Query(returns => ProductImageResponse)
  async imageResponse(): Promise<ProductImageResponse> {
      const out = new ProductImageResponse();
      return out;
  }

}
