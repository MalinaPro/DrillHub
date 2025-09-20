import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  Bell,
  Briefcase,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Files,
  Home,
  Menu,
  MessagesSquare,
  PieChart,
  Search,
  Users
} from "lucide-react";
import { useMemo } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { Input } from "./components/ui/input";
import { Progress } from "./components/ui/progress";
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./components/ui/tooltip";

const projects = [
  {
    name: "AI Training Portal",
    progress: 82,
    lead: "AK",
    status: "В процессе",
    delta: "+4.2%"
  },
  {
    name: "Mobile Analytics",
    progress: 56,
    lead: "BK",
    status: "В работе",
    delta: "+1.1%"
  },
  {
    name: "DrillHub Landing",
    progress: 94,
    lead: "CT",
    status: "Готово",
    delta: "+8.6%"
  },
  {
    name: "Partner API",
    progress: 33,
    lead: "DL",
    status: "На ревью",
    delta: "-0.4%"
  }
];

const activity = [
  {
    title: "Запуск рассылки",
    caption: "Маркетинг",
    time: "Сегодня, 09:24",
    icon: <MessagesSquare className="h-4 w-4" />
  },
  {
    title: "Создана ветка sprint-q2",
    caption: "Разработка",
    time: "Вчера, 18:11",
    icon: <GitBranchIcon />
  },
  {
    title: "Подготовлен отчёт",
    caption: "Финансы",
    time: "Вчера, 11:02",
    icon: <Files className="h-4 w-4" />
  }
];

function GitBranchIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
      <path d="M6 9V6a3 3 0 0 1 3-3h9" />
    </svg>
  );
}

const kpiCards = [
  {
    label: "Активные клиенты",
    value: "1 274",
    change: "+18%",
    icon: Users
  },
  {
    label: "Доход MRR",
    value: "$84.6K",
    change: "+6%",
    icon: BarChart3
  },
  {
    label: "Новые сделки",
    value: "64",
    change: "+12%",
    icon: Briefcase
  },
  {
    label: "NPS",
    value: "48",
    change: "+3",
    icon: Activity
  }
];

const revenueByChannel = [
  { channel: "Платформа", value: 42000 },
  { channel: "Партнёры", value: 21500 },
  { channel: "Интеграции", value: 16750 }
];

const conversionData = [
  { title: "Регистрации", percent: 78 },
  { title: "Активации", percent: 61 },
  { title: "Платящие", percent: 43 }
];

const team = [
  {
    name: "Анна Крылова",
    role: "Продакт-менеджер",
    avatar: "https://i.pravatar.cc/100?u=anna",
    initials: "AK"
  },
  {
    name: "Борис Котов",
    role: "Tech Lead",
    avatar: "https://i.pravatar.cc/100?u=boris",
    initials: "BK"
  },
  {
    name: "Света Тимофеева",
    role: "Дизайнер",
    avatar: "https://i.pravatar.cc/100?u=sveta",
    initials: "ST"
  }
];

const topNavigation = [
  { label: "Главная", icon: Home },
  { label: "Аналитика", icon: PieChart },
  { label: "Проекты", icon: Files },
  { label: "Календарь", icon: CalendarDays },
  { label: "Команда", icon: Users },
  { label: "Поддержка", icon: MessagesSquare }
];

const opportunityColumns = [
  { label: "Проект" },
  { label: "Прогресс" },
  { label: "Лид" },
  { label: "Статус" },
  { label: "Δ" }
];

function App() {
  const revenueTotal = useMemo(
    () => revenueByChannel.reduce((acc, item) => acc + item.value, 0),
    []
  );

  return (
    <TooltipProvider>
      <div className="flex h-screen bg-muted/20">
        <aside className="hidden w-[240px] border-r bg-background/60 px-4 py-6 lg:flex lg:flex-col">
          <div className="flex items-center gap-2 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-semibold text-primary-foreground">
              DH
            </div>
            <div>
              <p className="text-sm font-semibold">DrillHub</p>
              <p className="text-xs text-muted-foreground">операционная панель</p>
            </div>
          </div>
          <Separator className="my-6" />
          <ScrollArea className="flex-1">
            <nav className="space-y-1">
              {topNavigation.map((item) => (
                <Button
                  key={item.label}
                  variant={item.label === "Главная" ? "secondary" : "ghost"}
                  className="w-full justify-start gap-2"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </nav>
          </ScrollArea>
          <div className="mt-6 rounded-lg border p-4">
            <p className="text-sm font-semibold">Обновление 2.4</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Новый отчёт по когортам и расширенные права для партнёров.
            </p>
            <Button className="mt-4 w-full" size="sm">
              Смотреть обзор
            </Button>
          </div>
        </aside>
        <main className="flex-1 overflow-hidden">
          <header className="flex items-center justify-between border-b bg-background/80 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="font-semibold">DrillHub</span>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Обзор</TabsTrigger>
                  <TabsTrigger value="pipeline">Воронка</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>
              </Tabs>
              <Badge variant="secondary" className="gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                SLA 99.2%
              </Badge>
            </div>
            <div className="flex flex-1 items-center gap-2 px-4 lg:max-w-md">
              <div className="relative flex w-full items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Поиск по проектам, людям, документам" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute right-1 top-1 inline-flex h-2 w-2 rounded-full bg-destructive" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Уведомления</TooltipContent>
              </Tooltip>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Аватар" src="https://i.pravatar.cc/100?u=me" />
                      <AvatarFallback>YT</AvatarFallback>
                    </Avatar>
                    <span className="hidden text-sm font-medium md:inline">Ярослав Титов</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Аккаунт</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Профиль</DropdownMenuItem>
                  <DropdownMenuItem>Команда</DropdownMenuItem>
                  <DropdownMenuItem>Выход</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <ScrollArea className="h-[calc(100vh-60px)]">
            <div className="space-y-6 p-6">
              <section>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h1 className="text-2xl font-semibold">Обзор компании</h1>
                    <p className="text-sm text-muted-foreground">
                      Изучайте ключевые метрики DrillHub и управляйте командой из единого окна.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" className="gap-2">
                      <CalendarDays className="h-4 w-4" />
                      За месяц
                    </Button>
                    <Button className="gap-2">
                      <ArrowUpRight className="h-4 w-4" />
                      Создать отчёт
                    </Button>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {kpiCards.map((card) => (
                    <Card key={card.label}>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {card.label}
                        </CardTitle>
                        <card.icon className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-semibold">{card.value}</div>
                        <p className="text-xs text-emerald-600">{card.change} к прошлому периоду</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <section className="grid gap-4 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Динамика дохода
                      <Badge variant="secondary" className="gap-1">
                        <BarChart3 className="h-3.5 w-3.5" />
                        Обновлено 1ч назад
                      </Badge>
                    </CardTitle>
                    <CardDescription>Прирост по каналам за выбранный период</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-3">
                      {revenueByChannel.map((item) => (
                        <div key={item.channel} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{item.channel}</span>
                            <span>${item.value.toLocaleString("en-US")}</span>
                          </div>
                          <Progress value={(item.value / revenueTotal) * 100} />
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-4 text-sm">
                      <p className="font-medium">Комментарий аналитика</p>
                      <p className="mt-1 text-muted-foreground">
                        Основной рост обеспечен каналом платформы. Рекомендуем увеличить маркетинговый бюджет на интеграции для ускорения роста.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Конверсия в воронке</CardTitle>
                    <CardDescription>Путь клиента от регистрации до оплаты</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {conversionData.map((stage) => (
                      <div key={stage.title} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>{stage.title}</span>
                          <span className="font-semibold">{stage.percent}%</span>
                        </div>
                        <Progress value={stage.percent} />
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      Настроить эксперименты
                    </Button>
                  </CardContent>
                </Card>
              </section>

              <section className="grid gap-4 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Портфель возможностей</CardTitle>
                    <CardDescription>Приоритетные инициативы и их прогресс</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          {opportunityColumns.map((column) => (
                            <TableHead key={column.label}>{column.label}</TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projects.map((project) => (
                          <TableRow key={project.name}>
                            <TableCell className="font-medium">{project.name}</TableCell>
                            <TableCell className="w-40">
                              <Progress value={project.progress} />
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{project.lead}</Badge>
                            </TableCell>
                            <TableCell>{project.status}</TableCell>
                            <TableCell className={project.delta.startsWith("-") ? "text-destructive" : "text-emerald-600"}>
                              {project.delta}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <div className="grid gap-4 lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Активность команды</CardTitle>
                      <CardDescription>Последние изменения и обсуждения</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {activity.map((item) => (
                        <div key={item.title} className="flex items-start gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                            {item.icon}
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-tight">{item.title}</p>
                            <p className="text-xs text-muted-foreground">{item.caption}</p>
                            <p className="text-xs text-muted-foreground">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Команда недели</CardTitle>
                      <CardDescription>Лидеры по вовлечённости</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {team.map((person) => (
                        <div key={person.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={person.avatar} alt={person.name} />
                              <AvatarFallback>{person.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium leading-tight">{person.name}</p>
                              <p className="text-xs text-muted-foreground">{person.role}</p>
                            </div>
                          </div>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button size="icon" variant="ghost">
                                <ArrowUpRight className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>Открыть профиль</TooltipContent>
                          </Tooltip>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </ScrollArea>
        </main>
        <aside className="hidden w-80 border-l bg-background/70 px-6 py-6 xl:flex xl:flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Сводка дня</p>
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="h-3.5 w-3.5" />
              87%
            </Badge>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="rounded-lg border bg-muted/30 p-4">
              <p className="text-sm font-semibold">Фокус недели</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Завершить перенос Enterprise клиентов и подготовить playbook по онбордингу.
              </p>
              <Button size="sm" variant="secondary" className="mt-3 w-full">
                Открыть план
              </Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Коэффициент успеха</span>
                <Badge variant="secondary" className="text-xs">
                  64 сделки
                </Badge>
              </div>
              <Progress value={64} />
              <div className="grid gap-2 text-xs text-muted-foreground">
                <p className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Home className="h-3.5 w-3.5" />
                    Inbound
                  </span>
                  38%
                </p>
                <p className="flex items-center justify-between">
                  <PieChart className="h-3.5 w-3.5" />
                  Product-led
                  <span>24%</span>
                </p>
                <p className="flex items-center justify-between">
                  <Briefcase className="h-3.5 w-3.5" />
                  Enterprise
                  <span>16%</span>
                </p>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm font-semibold">Новости DrillHub</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Мы запускаем новый блок "dashboard-01" из shadcn/ui, адаптированный для Tauri.
              </p>
              <Button variant="outline" className="mt-3 w-full">
                Читать блог
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </TooltipProvider>
  );
}

export default App;
