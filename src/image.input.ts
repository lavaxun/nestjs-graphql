import { ObjectType, Field, Int } from '@nestjs/graphql';
import PaginatedResponse from './paginated.input';

@ObjectType()
export class ImageDto {
  altText: string;
  id: string;
  src: string;
}

@ObjectType('ProductImage')
export class ProductImageDto extends ImageDto {
  position: number;
}


@ObjectType()
export class ProductImageResponse extends PaginatedResponse(ProductImageDto) {
  // something: number; // <--- if I uncomment, it works fine
}