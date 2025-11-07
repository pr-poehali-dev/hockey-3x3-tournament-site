import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Team = {
  id: number;
  name: string;
  wins: number;
  losses: number;
  goals: number;
};

type Match = {
  id: number;
  team1: string;
  team2: string;
  score1: number | null;
  score2: number | null;
  date: string;
  round: string;
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const teams: Team[] = [
    { id: 1, name: 'Северная звезда', wins: 3, losses: 0, goals: 15 },
    { id: 2, name: 'Ледяные волки', wins: 2, losses: 1, goals: 12 },
    { id: 3, name: 'Балтийские медведи', wins: 2, losses: 1, goals: 10 },
    { id: 4, name: 'Невские акулы', wins: 1, losses: 2, goals: 8 },
    { id: 5, name: 'Морозные тигры', wins: 1, losses: 2, goals: 7 },
    { id: 6, name: 'Петровские львы', wins: 0, losses: 3, goals: 4 },
  ];

  const matches: Match[] = [
    { id: 1, team1: 'Северная звезда', team2: 'Ледяные волки', score1: 5, score2: 3, date: '15 янв, 10:00', round: '1/4 финала' },
    { id: 2, team1: 'Балтийские медведи', team2: 'Невские акулы', score1: 4, score2: 2, date: '15 янв, 12:00', round: '1/4 финала' },
    { id: 3, team1: 'Морозные тигры', team2: 'Петровские львы', score1: 3, score2: 1, date: '15 янв, 14:00', round: '1/4 финала' },
    { id: 4, team1: 'Северная звезда', team2: 'Балтийские медведи', score1: null, score2: null, date: '16 янв, 11:00', round: 'Полуфинал' },
    { id: 5, team1: 'Ледяные волки', team2: 'Морозные тигры', score1: null, score2: null, date: '16 янв, 13:00', round: 'Полуфинал' },
    { id: 6, team1: 'TBD', team2: 'TBD', score1: null, score2: null, date: '17 янв, 15:00', round: 'Финал' },
  ];

  const stats = [
    { label: 'Команды', value: '8', icon: 'Users' },
    { label: 'Матчи', value: '24', icon: 'Trophy' },
    { label: 'Голы', value: '156', icon: 'Target' },
    { label: 'Зрители', value: '2500+', icon: 'Eye' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <nav className="bg-secondary/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Snowflake" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="font-heading font-bold text-xl text-white">Хоккей 3х3</h1>
                <p className="text-xs text-muted-foreground">Каток Флагшток, СПб</p>
              </div>
            </div>
            <div className="hidden md:flex gap-1">
              {['home', 'schedule', 'teams', 'bracket', 'register'].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(section)}
                  className="text-sm"
                >
                  {section === 'home' && 'Главная'}
                  {section === 'schedule' && 'Расписание'}
                  {section === 'teams' && 'Команды'}
                  {section === 'bracket' && 'Турнирная сетка'}
                  {section === 'register' && 'Регистрация'}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center space-y-6">
              <Badge className="mb-4" variant="outline">
                15-17 января 2025
              </Badge>
              <h2 className="font-heading font-bold text-5xl md:text-6xl text-foreground">
                Открытый турнир<br />по хоккею 3х3
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Соревнования на открытом льду в самом центре Санкт-Петербурга
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button size="lg" onClick={() => setActiveSection('register')} className="font-semibold">
                  <Icon name="UserPlus" className="mr-2" size={20} />
                  Зарегистрировать команду
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection('schedule')}>
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Расписание
                </Button>
              </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Icon name={stat.icon as any} className="mx-auto mb-3 text-primary" size={32} />
                    <div className="font-heading font-bold text-3xl mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </section>

            <Card className="bg-card/50 backdrop-blur">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Radio" className="text-primary" size={24} />
                  Онлайн-трансляция
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <Icon name="Video" className="mx-auto text-muted-foreground" size={48} />
                    <p className="text-muted-foreground">Трансляция начнётся 15 января в 10:00</p>
                    <Button variant="outline">
                      <Icon name="Bell" className="mr-2" size={16} />
                      Напомнить о начале
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'schedule' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl mb-8">Расписание матчей</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="quarter">1/4</TabsTrigger>
                <TabsTrigger value="semi">1/2</TabsTrigger>
                <TabsTrigger value="final">Финал</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-4 mt-6">
                {matches.map((match) => (
                  <Card key={match.id} className="hover:border-primary transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex-1 min-w-[200px]">
                          <Badge variant="secondary" className="mb-2">{match.round}</Badge>
                          <div className="text-sm text-muted-foreground">{match.date}</div>
                        </div>
                        <div className="flex items-center gap-6 flex-1 justify-center">
                          <div className="text-right flex-1">
                            <div className="font-semibold">{match.team1}</div>
                          </div>
                          <div className="flex items-center gap-3 font-heading font-bold text-2xl">
                            <span className={match.score1 !== null ? 'text-foreground' : 'text-muted-foreground'}>
                              {match.score1 ?? '-'}
                            </span>
                            <span className="text-muted-foreground">:</span>
                            <span className={match.score2 !== null ? 'text-foreground' : 'text-muted-foreground'}>
                              {match.score2 ?? '-'}
                            </span>
                          </div>
                          <div className="text-left flex-1">
                            <div className="font-semibold">{match.team2}</div>
                          </div>
                        </div>
                        {match.score1 === null && (
                          <Button variant="outline" size="sm">
                            <Icon name="Bell" className="mr-2" size={14} />
                            Напомнить
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'teams' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl mb-8">Команды турнира</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team, index) => (
                <Card key={team.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="font-heading text-xl">{team.name}</CardTitle>
                      <Badge variant="secondary">#{index + 1}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Победы</span>
                        <span className="font-semibold text-green-600">{team.wins}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Поражения</span>
                        <span className="font-semibold text-red-600">{team.losses}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Голы</span>
                        <span className="font-semibold">{team.goals}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'bracket' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl mb-8">Турнирная сетка</h2>
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="space-y-12">
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-6 text-center">Четвертьфиналы</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {matches.slice(0, 4).map((match) => (
                        <div key={match.id} className="border border-border rounded-lg p-4 bg-background">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{match.team1}</span>
                            <span className="font-heading font-bold text-lg">
                              {match.score1 ?? '-'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{match.team2}</span>
                            <span className="font-heading font-bold text-lg">
                              {match.score2 ?? '-'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-6 text-center">Полуфиналы</h3>
                    <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      {matches.slice(4, 6).map((match) => (
                        <div key={match.id} className="border border-border rounded-lg p-4 bg-background">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{match.team1}</span>
                            <span className="font-heading font-bold text-lg text-muted-foreground">
                              {match.score1 ?? '-'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{match.team2}</span>
                            <span className="font-heading font-bold text-lg text-muted-foreground">
                              {match.score2 ?? '-'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-6 text-center">Финал</h3>
                    <div className="max-w-md mx-auto border-2 border-primary rounded-lg p-6 bg-primary/5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-lg">TBD</span>
                        <span className="font-heading font-bold text-2xl text-muted-foreground">-</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-lg">TBD</span>
                        <span className="font-heading font-bold text-2xl text-muted-foreground">-</span>
                      </div>
                      <div className="mt-4 pt-4 border-t text-center text-sm text-muted-foreground">
                        17 января, 15:00
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'register' && (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl mb-8">Регистрация команды</h2>
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Заявка на участие</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="teamName">Название команды</Label>
                    <Input id="teamName" placeholder="Введите название команды" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="captain">Капитан команды</Label>
                    <Input id="captain" placeholder="ФИО капитана" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="captain@example.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="players">Состав команды</Label>
                    <Input id="players" placeholder="ФИО игроков (минимум 5 человек)" />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <Icon name="Info" className="text-primary mt-0.5" size={18} />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-semibold mb-1">Важная информация:</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Регистрационный взнос: 5000₽</li>
                          <li>Минимум 5 игроков в заявке</li>
                          <li>Возраст участников: 18+</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full font-semibold" size="lg">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" size={20} />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" className="text-muted-foreground" size={18} />
                  <span>Каток Флагшток, наб. Крюкова канала, СПб</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" className="text-muted-foreground" size={18} />
                  <span>+7 (812) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" className="text-muted-foreground" size={18} />
                  <span>hockey3x3@flagshtok.ru</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-secondary mt-20 py-8 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="Snowflake" size={16} />
            <span>© 2025 Турнир по хоккею 3х3. Каток Флагшток, Санкт-Петербург</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
