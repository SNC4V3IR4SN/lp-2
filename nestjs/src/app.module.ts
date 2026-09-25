import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoModule } from './produto/produto.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module.js';

@Module({
  imports: [
    ProdutoModule,
    UsuariosModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://teta:<receba>@cluster0.xj18kma.mongodb.net/?appName=Cluster0',
      autoLoadEntities: true,
      synchronize: true, //somente em modo DEV
      logging: true
    }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
