import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto.js';
import { UpdateUsuarioDto } from './dto/update-usuario.dto.js';
import { Usuario } from './entities/usuario.entity.js';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {
  
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: MongoRepository <Usuario>
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosRepository.save(createUsuarioDto);
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
