import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/create-coffee.dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Brew',
      brand: 'Nescafe',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} not found`);
    }

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = createCoffeeDto as Coffee;
    coffee.id = (this.coffees.pop()?.id || -1) + 1;
    this.coffees.push(coffee);
    return createCoffeeDto;
  }

  update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const index = this.coffees.findIndex((item) => item.id === +id);
    if (index !== -1) {
      const existingCoffee = this.coffees[index];
      this.coffees[index] = {
        ...existingCoffee,
        ...updateCoffeeDto,
      };
    }
  }

  remove(id: string) {
    this.coffees = this.coffees.filter((item) => item.id !== +id);
  }
}
