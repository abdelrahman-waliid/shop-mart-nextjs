import { ProductsResponse } from '@/Interfaces/productInterface'
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { StarHalf, StarIcon } from 'lucide-react'
import Link from 'next/link'
import AddToCart from '@/components/AddToCart/AddToCart'
import { formatCurrency } from '@/Helpers/formatCurrency'
import { WishListRes } from '@/Interfaces/wishlistInterfaces'
import { getWishlistItems } from '@/actions/wishlistActions'
import WishlistInitializer from '@/components/WishlistInitializer/WishlistInitializer'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'

export default async function Products() {
  const session = await getServerSession(authOptions)
  const response = await fetch(`${process.env.API_URL}/products`)
  const { data }: ProductsResponse = await response.json()
  const wishlistData: WishListRes = await getWishlistItems()

  const ids = wishlistData?.data?.map(item => item.id)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data?.map((product) => (
          <div key={product.id}>
            <Card className="h-full overflow-hidden pt-0 flex flex-col transition-shadow hover:shadow-lg">

              <Link
                href={`/products/${product.id}`}
                className="flex flex-col flex-1"
              >

                {/* Image */}
                <div className="-mt-6 -mx-6 -m-1 bg-white">
                  <div className="relative w-full h-56 sm:h-60 flex items-center justify-center p-4">
                    <Image
                      src={product.imageCover}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width:640px) 100vw,
                             (max-width:768px) 50vw,
                             (max-width:1024px) 33vw,
                             (max-width:1280px) 25vw,
                             20vw"
                    />
                  </div>
                </div>

                <CardHeader className="px-4 py-3">
                  <CardDescription className="text-xs sm:text-sm">
                    {product.brand.name}
                  </CardDescription>

                  <CardTitle className="line-clamp-2 text-sm sm:text-base min-h-12">
                    {product.title}
                  </CardTitle>

                  <CardDescription className="text-xs sm:text-sm">
                    {product.category.name}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-4 pb-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <StarIcon className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <StarIcon className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <StarIcon className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <StarIcon className="h-4 w-4 fill-amber-500 text-amber-500" />
                      <StarHalf className="h-4 w-4 fill-amber-500 text-amber-500" />
                    </div>

                    <p className="text-sm font-medium">
                      {product.ratingsAverage}
                    </p>
                  </div>

                  <p className="pt-4 text-center text-lg font-extrabold">
                    {formatCurrency(product.price)}
                  </p>
                </CardContent>

              </Link>

              <AddToCart
                productId={product.id}
                session={session}
              />

            </Card>
          </div>
        ))}
      </div>

      <WishlistInitializer ids={ids} />
    </>
  )
}